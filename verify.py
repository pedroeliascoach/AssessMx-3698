import asyncio, json
from playwright.async_api import async_playwright

async def main():
 async with async_playwright() as p:
  browser = await p.chromium.launch(headless=True, executable_path='/usr/bin/google-chrome', args=['--no-sandbox'])
  page = await browser.new_page(viewport={"width":1440,"height":1000},device_scale_factor=1)
  errors=[]
  page.on('pageerror',lambda e:errors.append(str(e)))
  await page.goto('http://localhost:4200',wait_until='networkidle')
  await page.screenshot(path='/home/user/assessmx/desktop.png',full_page=True)
  await page.get_by_role('button',name='Quiero saber más').nth(1).click()
  assert await page.locator('select[name=service]').input_value()=='Formación a la medida'
  await page.get_by_role('button',name='Ver información de privacidad.').click()
  assert await page.locator('dialog').is_visible()
  await page.keyboard.press('Escape')
  assert await page.locator('dialog').count()==0
  await page.locator('input[name=name]').fill('Prueba técnica AssessMx')
  await page.locator('input[name=email]').fill('prueba@example.com')
  await page.locator('textarea[name=message]').fill('Solicitud de prueba técnica para validar la persistencia del formulario.')
  await page.locator('input[name=consent]').check()
  await page.get_by_role('button',name='Enviar solicitud',exact=True).click()
  await page.get_by_text('Tu solicitud está registrada.').wait_for()
  await page.screenshot(path='/home/user/assessmx/form-test.png')
  await page.get_by_role('button',name='Enviar otra solicitud').click()
  await page.locator('#certificaciones').scroll_into_view_if_needed()
  await page.get_by_role('button',name='EC0301').click()
  assert await page.locator('#detail-EC0301').is_visible()
  await page.set_viewport_size({"width":390,"height":844})
  await page.goto('http://localhost:4200',wait_until='networkidle')
  await page.screenshot(path='/home/user/assessmx/mobile.png',full_page=True)
  assert await page.evaluate('document.documentElement.scrollWidth <= window.innerWidth')
  await page.get_by_role('button',name='Abrir menú').click()
  await page.locator('#mobile-nav').get_by_role('link',name='Contacto').click()
  assert await page.locator('#mobile-nav').count()==0
  assert not errors,errors
  print(json.dumps({"desktop":"ok","mobile":"ok","form":"saved","service_selection":"ok","accordion":"ok","privacy_dialog":"ok","page_errors":errors}))
  await browser.close()

asyncio.run(main())