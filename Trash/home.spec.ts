import { test, expect } from '@playwright/test'

const URL = 'https://automationintesting.online/#'

test.describe('restful-booker-platform home access', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(URL)
  })
})
