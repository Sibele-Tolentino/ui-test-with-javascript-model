import HomePage from '../pageObjects/homePage'
const homePage = new HomePage

Given('I acess base page', async function () {
  console.log('Started on hooks')
  });
When('I press login', async function () {
  await homePage.access_login_page()
  });