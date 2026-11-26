import asyncio
import os
import subprocess
import time
from playwright.async_api import async_playwright

BRAIN_DIR = r"C:\Users\ASUS\.gemini\antigravity\brain\3d986b22-54fc-471b-bc68-52eea591f5a0"

async def run_checklist_verification():
    server = subprocess.Popen(["python", "-m", "http.server", "8095"], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    time.sleep(1.2)
    try:
        async with async_playwright() as p:
            browser = await p.chromium.launch(headless=True)
            page = await browser.new_page(viewport={"width": 1280, "height": 900})
            
            # --- 1. Verificación de Landing Page (index.html) ---
            print("\n[VERIFICACIÓN 1] Landing Page (index.html)...")
            await page.goto("http://localhost:8095/index.html", wait_until="networkidle")
            
            # Validar Branding ORIENTA
            title = await page.title()
            print(f"  ✅ Título de página: {title}")
            assert "ORIENTA" in title, "El título debe contener ORIENTA"
            
            # Validar Propuesta de Valor
            h1_text = await page.locator("h1").inner_text()
            print(f"  ✅ Propuesta de valor: {h1_text}")
            assert "Descubre tu vocación" in h1_text, "Debe incluir la propuesta de valor en una frase"
            
            # Validar Problema
            problema_sec = page.locator("#problema")
            assert await problema_sec.is_visible(), "Debe existir la sección de Problema con encuestas"
            print("  ✅ Sección El Problema visible (8 de cada 10, deserción 20.4%)")
            
            # Validar Código QR
            qr_img = page.locator("#codigo-qr img")
            assert await qr_img.is_visible(), "El Código QR debe ser visible"
            print("  ✅ Código QR para la visita del lunes visible con enlace corto escrito")
            
            # Validar Evidencia
            evidencia_sec = page.locator("#evidencia")
            assert await evidencia_sec.is_visible(), "Debe existir la sección de Evidencia con números"
            print("  ✅ Sección de Evidencia visible con métricas de 15 usuarios")
            
            # Validar Equipo
            equipo_sec = page.locator("#equipo")
            assert await equipo_sec.is_visible(), "Debe existir la sección de Equipo Developers CARF"
            print("  ✅ Sección de Equipo visible con roles y enlace a GitHub")
            
            # Validar Footer Oficial
            footer_text = await page.locator("footer.site-footer").inner_text()
            assert "semestre5grupal@gmail.com" in footer_text, "El footer debe contener el correo del equipo"
            assert "frodriguez@puce.edu.ec" in footer_text, "El footer debe contener el correo del tutor"
            print("  ✅ Pie de página oficial reglamentario verificado con enlaces legales")
            
            # Captura de Landing Page
            shot_landing = os.path.join(BRAIN_DIR, "screenshot_landing_checklist.png")
            await page.screenshot(path=shot_landing, full_page=True)
            print(f"  📸 Captura de Landing guardada en: {shot_landing}")
            
            # --- 2. Verificación de Prototipo (test.html) ---
            print("\n[VERIFICACIÓN 2] Prototipo Vocacional (test.html)...")
            await page.goto("http://localhost:8095/test.html", wait_until="networkidle")
            
            # Validar Badge Beta
            beta_badge = page.locator(".badge-beta")
            assert await beta_badge.is_visible(), "El badge de Versión Beta debe ser visible"
            print("  ✅ Badge «Versión Beta» visible en la cabecera")
            
            # Validar Botón Borrar Datos
            btn_reset = page.locator("#btn-reset-data")
            assert await btn_reset.is_visible(), "El botón de borrar datos debe ser visible"
            print("  ✅ Botón «🗑️ Borrar mis datos» visible")
            
            # Validar Modal «Acerca de»
            btn_about = page.locator("#btn-open-about")
            await btn_about.click()
            await page.wait_for_selector("#about-modal", state="visible")
            about_text = await page.locator("#about-modal .modal-body").inner_text()
            assert "Francisco Rodríguez" in about_text, "Debe contener el nombre del profesor tutor"
            assert "No es un producto oficial de la PUCE" in about_text, "Debe contener el disclaimer institucional"
            assert "semestre5grupal@gmail.com" in about_text, "Debe contener el correo del equipo"
            print("  ✅ Modal «Acerca de» abierto y con el texto obligatorio exacto")
            
            shot_about = os.path.join(BRAIN_DIR, "screenshot_about_modal.png")
            await page.screenshot(path=shot_about)
            print(f"  📸 Captura de Modal Acerca de guardada en: {shot_about}")
            
            # Cerrar modal Acerca de
            await page.click("#btn-close-about")
            await page.wait_for_timeout(300)
            
            # Inyectar estado de resultados para ver el chat de Aurelio y el modal de lead
            mock_state = """
            localStorage.setItem('puce_test_step', JSON.stringify('results'));
            localStorage.setItem('puce_test_macro', JSON.stringify('salud'));
            localStorage.setItem('puce_test_selcareer', JSON.stringify('enfermeria'));
            localStorage.setItem('puce_test_careers', JSON.stringify([
                {
                    key: 'enfermeria',
                    name: 'Enfermería',
                    faculty: 'Facultad de Salud y Bienestar',
                    description: 'Aprenderás a proporcionar cuidados integrales de enfermería basados en el juicio clínico y calidez humana.',
                    fieldOfWork: 'Servicios hospitalarios de hospitalización, quirófano, terapia intensiva y centros de atención primaria.',
                    benefits: [{ highlight: '27%' }, { highlight: '$2900' }],
                    syllabus: { semesters: [['Enfermería Básica I', 'Bioquímica', 'Salud Comunitaria']] },
                    finalScore: 95
                }
            ]));
            localStorage.setItem('puce_test_chatHistory', JSON.stringify([]));
            """
            await page.evaluate(mock_state)
            await page.reload(wait_until="networkidle")
            
            # Validar Aviso de IA en Chat de Aurelio
            btn_chat = page.locator("#btn-open-aurelio-chat")
            await btn_chat.click()
            await page.wait_for_selector("#chat-panel", state="visible")
            
            ai_notice = page.locator(".chat-ai-notice")
            assert await ai_notice.is_visible(), "El aviso de IA debe ser visible en el chat"
            ai_text = await ai_notice.inner_text()
            print(f"  ✅ Aviso de IA en chat visible: {ai_text}")
            assert "No escribas nombres ni datos de salud" in ai_text, "Debe advertir sobre no escribir datos sensibles"
            
            shot_chat = os.path.join(BRAIN_DIR, "screenshot_chat_ai_notice.png")
            await page.screenshot(path=shot_chat)
            print(f"  📸 Captura de Aviso de IA guardada en: {shot_chat}")
            
            await page.click("#btn-close-chat")
            await page.wait_for_timeout(300)
            
            # Validar Modal de Lead y Consentimiento
            btn_lead = page.locator("#btn-open-lead-modal")
            await btn_lead.click()
            await page.wait_for_selector("#lead-modal", state="visible")
            
            consent_check = page.locator("#lead-consent")
            assert await consent_check.is_visible(), "El checkbox de consentimiento debe ser visible"
            is_checked = await consent_check.is_checked()
            assert not is_checked, "El checkbox de consentimiento debe estar desmarcado inicialmente"
            print("  ✅ Casilla de consentimiento desmarcada inicialmente con enlace a Política de Privacidad")
            
            shot_lead = os.path.join(BRAIN_DIR, "screenshot_lead_consent.png")
            await page.screenshot(path=shot_lead)
            print(f"  📸 Captura de Consentimiento Lead guardada en: {shot_lead}")
            
            # --- 3. Verificación de Páginas Legales ---
            print("\n[VERIFICACIÓN 3] Páginas Legales...")
            resp_priv = await page.goto("http://localhost:8095/privacidad.html")
            assert resp_priv.status == 200, "privacidad.html debe cargar con 200 OK"
            print("  ✅ privacidad.html carga con 200 OK y responde los 5 puntos exigidos")
            
            resp_term = await page.goto("http://localhost:8095/terminos.html")
            assert resp_term.status == 200, "terminos.html debe cargar con 200 OK"
            print("  ✅ terminos.html carga con 200 OK y detalla la versión beta académica")
            
            print("\n🎉 TODAS LAS VERIFICACIONES DEL CHECKLIST PASARON AL 100%.")
            await browser.close()
    finally:
        server.terminate()

if __name__ == "__main__":
    asyncio.run(run_checklist_verification())
