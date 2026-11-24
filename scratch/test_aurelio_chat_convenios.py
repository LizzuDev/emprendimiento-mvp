import asyncio
import os
import subprocess
import time
from playwright.async_api import async_playwright

BRAIN_DIR = r"C:\Users\ASUS\.gemini\antigravity\brain\3d986b22-54fc-471b-bc68-52eea591f5a0"

async def test_chat():
    server = subprocess.Popen(["python", "-m", "http.server", "8091"], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    time.sleep(1.2)
    try:
        async with async_playwright() as p:
            browser = await p.chromium.launch(headless=True)
            page = await browser.new_page(viewport={"width": 1280, "height": 900})
            
            # Navegar a test.html
            await page.goto("http://localhost:8091/test.html")
            
            # Inyectar estado en localStorage simulando haber completado el test con Enfermería en 1er lugar
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
            
            # Verificar los nuevos query chips
            chip_convenios = page.locator(".query-chip", has_text="convenios")
            assert await chip_convenios.count() > 0, "Debe existir un chip de convenios"
            print("✅ Chip de convenios encontrado en la interfaz.")
            
            # Escribir la pregunta exacta del usuario
            query_text = "Qué convenios tiene la puce para la carrera de enfermería"
            await page.fill("#chat-input", query_text)
            await page.click(".chat-send-btn")
            
            # Esperar a que aparezca la respuesta en los mensajes del chat
            await page.wait_for_timeout(1000)
            
            # Obtener el último mensaje del chat
            messages = await page.locator(".chat-msg.aurelio").all_inner_texts()
            last_reply = messages[-1] if messages else ""
            print("\n--- RESPUESTA OBTENIDA EN EL CHAT ---")
            print(last_reply)
            
            # Aserciones estrictas
            assert "Hospital" in last_reply or "convenios" in last_reply.lower(), "La respuesta debe mencionar convenios u hospitales"
            assert "Carlos Andrade Marín" in last_reply or "Pablo Arturo Suárez" in last_reply, "Debe citar hospitales de referencia"
            assert "laboratorios propios y alta demanda laboral. ¿Te gustaría saber más sobre sus aranceles" not in last_reply, "NO debe devolver el fallback estático genérico anterior"
            
            print("✅ Todas las aserciones pasaron: la respuesta es exacta, contextual y hospitalaria.")
            
            # Guardar captura
            shot_path = os.path.join(BRAIN_DIR, "screenshot_aurelio_convenios.png")
            await page.screenshot(path=shot_path)
            print(f"📸 Captura guardada en: {shot_path}")
            
            await browser.close()
    finally:
        server.terminate()

if __name__ == "__main__":
    asyncio.run(test_chat())

