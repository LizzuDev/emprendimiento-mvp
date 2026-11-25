// =========================================================
// Formateo seguro de mensajes del chat de Aurelio Bot
// Convierte texto con markdown simple (**negrita**, listas, enlaces)
// a HTML seguro. Todo el texto se escapa antes de generar etiquetas.
// =========================================================

const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

export function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (c) => ESCAPES[c]);
}

// Enlaces y correos. Se aplica sobre texto ya escapado y antes de negritas/cursivas.
function autoLink(escaped) {
  return escaped.replace(
    /(https?:\/\/[^\s<*]+)|([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/g,
    (match, url, email) => {
      if (url) {
        const trailing = (url.match(/[.,;:!?)]+$/) || [''])[0];
        const clean = trailing ? url.slice(0, -trailing.length) : url;
        return `<a href="${clean}" target="_blank" rel="noopener noreferrer">${clean}</a>${trailing}`;
      }
      return `<a href="mailto:${email}">${email}</a>`;
    }
  );
}

function formatInline(escaped) {
  let out = autoLink(escaped);
  out = out.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  out = out.replace(/(^|[^\w*])\*(?!\s)([^*\n]+?)\*(?!\w)/g, '$1<em>$2</em>');
  // Asteriscos huérfanos que el modelo pudo dejar sueltos
  return out.replace(/\*+/g, '');
}

const BULLET_RE = /^\s*(?:[•·▪●◦]|[-–*])\s+(.*)$/;
const ORDERED_RE = /^\s*(\d+)[.)]\s+(.*)$/;
const HEADING_RE = /^\s*#{1,6}\s+(.*)$/;

export function formatAurelioMessage(text) {
  const lines = String(text ?? '').replace(/\r\n?/g, '\n').split('\n');
  const html = [];
  let paragraph = [];
  let list = null; // { type: 'ul' | 'ol', start, items: [] }

  const flushParagraph = () => {
    if (paragraph.length) {
      html.push(`<p>${paragraph.map((l) => formatInline(escapeHtml(l.trim()))).join('<br>')}</p>`);
      paragraph = [];
    }
  };
  const flushList = () => {
    if (list) {
      const startAttr = list.type === 'ol' && list.start > 1 ? ` start="${list.start}"` : '';
      const items = list.items.map((i) => `<li>${formatInline(escapeHtml(i))}</li>`).join('');
      html.push(`<${list.type}${startAttr}>${items}</${list.type}>`);
      list = null;
    }
  };

  for (const line of lines) {
    if (!line.trim()) {
      flushParagraph();
      flushList();
      continue;
    }

    const heading = line.match(HEADING_RE);
    if (heading) {
      flushParagraph();
      flushList();
      html.push(`<p><strong>${formatInline(escapeHtml(heading[1].trim()))}</strong></p>`);
      continue;
    }

    const ordered = line.match(ORDERED_RE);
    if (ordered) {
      flushParagraph();
      if (!list || list.type !== 'ol') {
        flushList();
        list = { type: 'ol', start: Number(ordered[1]), items: [] };
      }
      list.items.push(ordered[2].trim());
      continue;
    }

    const bullet = line.match(BULLET_RE);
    if (bullet) {
      flushParagraph();
      if (!list || list.type !== 'ul') {
        flushList();
        list = { type: 'ul', start: 1, items: [] };
      }
      list.items.push(bullet[1].trim());
      continue;
    }

    flushList();
    paragraph.push(line);
  }

  flushParagraph();
  flushList();
  return html.join('');
}
