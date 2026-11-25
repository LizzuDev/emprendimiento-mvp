import asyncio
import os
import subprocess
import time
from playwright.async_api import async_playwright

BRAIN_DIR = r"C:\Users\ASUS\.gemini\antigravity\brain\3d986b22-54fc-471b-bc68-52eea591f5a0"

async def test_guided_chat():
    server = subprocess.Popen(["python", "-m", "http.server", "8092"], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    time.sleep(1.2)
    try:
        async with async_playwright() as p:
            browser = await p.chromium.launch(headless=True)
            page = await browser.new_page(viewport={"width": 1280, "height": 900})
            
            await page.goto("http://localhost:8092/test.html")
            
            # Inyectar estado en localStorage para Enfermería
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
            
            # Abrir el chat de Aurelio
            chat_btn = page.locator("#btn-open-aurelio-chat")
            await chat_btn.click()
            await page.wait_for_selector("#chat-panel", state="visible")
            print("✅ Panel de chat abierto.")
            
            # Verificar que la entrada de texto esté oculta/no visible
            chat_form = page.locator("#chat-form")
            is_form_visible = await chat_form.is_visible()
            print(f"✅ Formulario de texto libre oculto: {not is_form_visible}")
            assert not is_form_visible, "El formulario de texto libre debe estar oculto"
            
            # Verificar que los chips sugeridos estén presentes
            chips = page.locator(".query-chip")
            chips_count = await chips.count()
            print(f"✅ Chips sugeridos encontrados: {chips_count}")
            assert chips_count >= 6, "Deben existir al menos 6 chips de preguntas guiadas"
            
            # Click en chip de convenios
            chip_convenios = page.locator(".query-chip", has_text="convenios")
            await chip_convenios.click()
            await page.wait_for_timeout(1000)
            
            # Verificar mensaje de respuesta
            messages = await page.locator(".chat-msg.aurelio").all_inner_texts()
            last_reply = messages[-1] if messages else ""
            print("\n--- RESPUESTA A CONVENIOS ---")
            print(last_reply[:250] + "...")
            assert "Carlos Andrade Marín" in last_reply or "Hospital" in last_reply, "Debe responder con convenios de salud"
            
            # Click en chip de costos y becas
            chip_costos = page.locator(".query-chip", has_text="becas")
            await chip_costos.click()
            await page.wait_for_timeout(1000)
            
            messages2 = await page.locator(".chat-msg.aurelio").all_inner_texts()
            last_reply2 = messages2[-1] if messages2 else ""
            print("\n--- RESPUESTA A COSTOS Y BECAS ---")
            print(last_reply2[:250] + "...")
            assert "aranceles" in last_reply2.lower() or "descuento" in last_reply2.lower() or "beca" in last_reply2.lower(), "Debe responder con costos y becas"
            
            # Guardar captura
            shot_path = os.path.join(BRAIN_DIR, "screenshot_guided_chat.png")
            await page.screenshot(path=shot_path)
            print(f"\n📸 Captura guardada en: {shot_path}")
            print("🎉 Verificación de chat guiado exitosa.")
            
            await browser.close()
    finally:
        server.terminate()

if __name__ == "__main__":
    asyncio.run(test_guided_chat())
