import { test, expect } from '@playwright/test'

const URL = 'https://www.demoblaze.com/index.html'

test.describe('Restful-booker-platform demo', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(URL)
  })

  test("Navigation vers la page d'accueil", async ({ page }) => {
    const homeLinkSelector = 'a.nav-link[href="index.html"]'
    await page.click(homeLinkSelector)
    // Ajoutez ici des assertions pour vérifier que vous êtes sur la page d'accueil
  })

  test('Navigation vers la page de contact (modal)', async ({ page }) => {
    const contactLinkSelector = 'a.nav-link[data-target="#exampleModal"]'
    await page.click(contactLinkSelector)
    // Ajoutez ici des assertions pour vérifier que vous êtes sur la page de contact (modal)
  })

  test('Navigation vers la page "About us" (modal)', async ({ page }) => {
    const aboutUsLinkSelector = 'a.nav-link[data-target="#videoModal"]'
    await page.click(aboutUsLinkSelector)
    // Ajoutez ici des assertions pour vérifier que vous êtes sur la page "About us" (modal)
  })

  test('Navigation vers la page du panier', async ({ page }) => {
    const cartLinkSelector = 'a#cartur'
    await page.click(cartLinkSelector)
    // Ajoutez ici des assertions pour vérifier que vous êtes sur la page du panier
  })

  test('Connexion et déconnexion', async ({ page }) => {
    const loginLinkSelector = 'a#login2'
    const logoutLinkSelector = 'a#logout2'

    // Test de connexion
    await page.click(loginLinkSelector)
    // Remplir le champ "Username"
    const usernameInputSelector = '#loginusername'
    await page.fill(usernameInputSelector, 'admin')

    // Remplir le champ "Password"
    const passwordInputSelector = '#loginpassword'
    await page.fill(passwordInputSelector, 'admin')

    // Soumettre le formulaire

    const loginButtonSelector = 'button:has-text("Log in")'
    await page.click(loginButtonSelector)

    test.setTimeout(1000)
    //vérifier

    // await page.click(logoutLinkSelector)
    // Ajoutez ici des assertions pour vérifier que vous êtes déconnecté
  })

  test('Inscription', async ({ page }) => {
    const signupLinkSelector = 'a#signin2'

    // Test d'inscription
    await page.click(signupLinkSelector)
    //remplissage du formulaire d'inscription
    const usernameInputSelector = '#sign-username'
    await page.fill(usernameInputSelector, 'user_me')

    // Remplir le champ "Password"
    const passwordInputSelector = '#sign-password'
    await page.fill(passwordInputSelector, 'password')
    const signUpButtonSelector = 'button.btn-primary'
    await page.click(signUpButtonSelector)
    // vérification que l'inscription a réussi
  })
})
