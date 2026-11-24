import asyncio
import os
import subprocess
import time
from playwright.async_api import async_playwright

BRAIN_DIR = r"C:\Users\ASUS\.gemini\antigravity\brain\3d986b22-54fc-471b-bc68-52eea591f5a0"

async def run_tests():
    # Start local HTTP server
    server_process = subprocess.Popen(["python", "-m", "http.server", "8089"], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    time.sleep(1.5)
    
    try:
        async with async_playwright() as p:
            browser = await p.chromium.launch(headless=True)
            
            # --- 1. Desktop Test (1280x800) ---
            print("\n[TEST 1] Verificando en Desktop (1280x800)...")
            context_desktop = await browser.new_context(viewport={"width": 1280, "height": 800})
            page_desktop = await context_desktop.new_page()
            await page_desktop.goto("http://localhost:8089/index.html", wait_until="networkidle")
            
            hero_btn = page_desktop.locator("#hero-start-btn")
            assert await hero_btn.is_visible(), "El botón hero debe ser visible en Desktop"
            hero_text = await hero_btn.inner_text()
            print(f"  ✅ Botón Hero visible con texto: {hero_text.strip()}")
            
            # Scroll down to body CTA
            body_cta = page_desktop.locator("#body-start-btn")
            await body_cta.scroll_into_view_if_needed()
            assert await body_cta.is_visible(), "El botón body CTA debe ser visible"
            print("  ✅ Botón Body CTA visible tras scroll")
            
            # Capture desktop screenshot
            desktop_shot_path = os.path.join(BRAIN_DIR, "screenshot_landing_desktop.png")
            await page_desktop.screenshot(path=desktop_shot_path, full_page=False)
            print(f"  📸 Captura desktop guardada en: {desktop_shot_path}")
            await context_desktop.close()
            
            # --- 2. Mobile Test (390x844 - iPhone / Smartphone común) ---
            print("\n[TEST 2] Verificando en Mobile (390x844)...")
            context_mobile = await browser.new_context(
                viewport={"width": 390, "height": 844},
                user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1"
            )
            page_mobile = await context_mobile.new_page()
            await page_mobile.goto("http://localhost:8089/index.html", wait_until="networkidle")
            
            # Check Hero button
            m_hero_btn = page_mobile.locator("#hero-start-btn")
            assert await m_hero_btn.is_visible(), "Botón Hero debe ser visible en Mobile viewport"
            print("  ✅ Botón Hero visible en pantalla inicial móvil")
            
            # Check Sticky bottom bar
            sticky_bar = page_mobile.locator("#mobile-sticky-bar")
            assert await sticky_bar.is_visible(), "Barra sticky móvil debe ser visible"
            print("  ✅ Barra flotante fija (#mobile-sticky-bar) visible en parte inferior móvil")
            
            # Scroll down 600px
            await page_mobile.mouse.wheel(0, 600)
            await asyncio.sleep(0.5)
            assert await sticky_bar.is_visible(), "Barra sticky móvil debe seguir visible tras scroll"
            print("  ✅ Barra sticky sigue fija y visible tras scroll de 600px")
            
            # Capture mobile screenshot showing the sticky bar
            mobile_shot_path = os.path.join(BRAIN_DIR, "screenshot_landing_mobile.png")
            await page_mobile.screenshot(path=mobile_shot_path, full_page=False)
            print(f"  📸 Captura móvil guardada en: {mobile_shot_path}")
            
            # Click on sticky CTA and verify navigation
            sticky_btn = page_mobile.locator("#sticky-start-btn")
            href = await sticky_btn.get_attribute("href")
            assert href == "test.html?nuevo=1", f"El href debe ser test.html?nuevo=1, obtenido: {href}"
            print(f"  ✅ Atributo href verificado en sticky CTA: {href}")

            await sticky_btn.click()
            await page_mobile.wait_for_load_state("networkidle")
            current_url = page_mobile.url
            print(f"  ✅ Navegación verificada. URL actual: {current_url}")
            assert "test.html" in current_url, f"La URL debe contener test.html, obtenida: {current_url}"
            
            # Verificar que el contenedor del test se cargue en la página de destino
            test_container = page_mobile.locator(".test-container, #test-container, main")
            assert await test_container.count() > 0, "El contenedor principal del test debe estar presente en test.html"
            print("  ✅ Página test.html cargada correctamente tras hacer click")
            
            await context_mobile.close()
            await browser.close()
            print("\n🎉 Todas las pruebas automatizadas pasaron exitosamente.")
            
    finally:
        server_process.terminate()

if __name__ == "__main__":
    asyncio.run(run_tests())

