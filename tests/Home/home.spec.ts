import { test, expect } from '@playwright/test'

const URL = 'https://www.demoblaze.com/index.html'

test.describe('PRODUCT STORE demo', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(URL)
  })

  test('has title', async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/STORE/)
    expect(page.url()).toBe(URL)
  })
})
