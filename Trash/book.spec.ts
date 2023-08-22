import { test, expect } from '@playwright/test'

const URL = 'https://automationintesting.online/#'

test.describe('Automation Exercise Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(URL)
  })

  test('booking a room', async ({ page }) => {
    await page.waitForSelector('.openBooking')
    await page.click('.openBooking')
    //enregistrement date

    // Sélectionnez l'élément bouton avec la classe .rbc-now et les deux prochaines div.
    const buttonElement = await page.waitForSelector('.rbc-now')
    if (!buttonElement) {
      console.error("L'élément bouton n'a pas été trouvé.")
      return
    }

    const nextDivs = await page.$$('div:nth-child(+2)') // Sélectionnez les deux prochaines divs.
    if (nextDivs.length < 2) {
      console.error("Les éléments div n'ont pas été trouvés.")
      return
    }

    // Obtenez les rectangles de chaque élément pour déterminer les points de départ et d'arrivée.
    const buttonRect = await buttonElement.boundingBox()
    const firstDivRect = await nextDivs[0].boundingBox()
    const secondDivRect = await nextDivs[1].boundingBox()

    if (!buttonRect || !firstDivRect || !secondDivRect) {
      console.error('Rectangles non trouvés pour les éléments.')
      return
    }

    // Calculez les coordonnées du point de départ (bouton) et du point d'arrivée (div).
    const start = {
      x: buttonRect.x + buttonRect.width / 2,
      y: buttonRect.y + buttonRect.height / 2,
    }
    const end = {
      x: firstDivRect.x + firstDivRect.width / 2,
      y: firstDivRect.y + firstDivRect.height / 2,
    }

    // Effectuez le glisser-déposer en utilisant les actions de souris.
    await page.mouse.move(start.x, start.y)
    await page.mouse.down()
    await page.mouse.move(end.x, end.y)
    await page.mouse.up()

    //remplir champs
    await page.fill('.room-firstname', 'John')
    await page.fill('.room-lastname', 'Doe')
    await page.fill('.room-email', 'johndoe@example.com')
    await page.fill('.room-phone', '1234567890')

    // Cliquer sur le bouton "Book" pour soumettre le formulaire.
    await page.click('.book-room')
  })
})
