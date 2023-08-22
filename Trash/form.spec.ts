import { test, expect } from '@playwright/test'

const URL = 'https://automationintesting.online/#'

test.describe('Automation Exercise Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(URL)
  })

  test('send message', async ({ page }) => {
    // Remplir les champs du formulaire avec des informations factices.
    await page.fill('[data-testid="ContactName"]', 'John Doe')
    await page.fill('[data-testid="ContactEmail"]', 'johndoe@example.com')
    await page.fill('[data-testid="ContactPhone"]', '1234567890')
    await page.fill('[data-testid="ContactSubject"]', 'Test Subject')
    await page.fill(
      '[data-testid="ContactDescription"]',
      'This is a test message.',
    )

    // Cliquer sur le bouton "Submit" pour soumettre le formulaire.
    await page.click('#submitContact')
  })
})
