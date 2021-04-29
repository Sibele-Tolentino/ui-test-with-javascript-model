import LoginPage from '../pageObjects/loginPage';
const dados = require('../../fixtures/data.json')
const loginPage = new LoginPage


When('I log in with an invalid user', async  () => {
	await loginPage.sendUserEmail({email : dados.invalid_login.email})
	await loginPage.clickBtLogin()
  });

Then('I see error login page', async () => {
	await loginPage.getText()
  });



  