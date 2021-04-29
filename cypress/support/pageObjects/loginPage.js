import loginPageElements from '../elements/loginElementsPage'
const dados = require('../../fixtures/data.json')

class LoginPage {
	async sendUserEmail({email = dados.valid_login.email}={}) {
		await cy.get(loginPageElements.login_user_email()).type(email)
	}

	async sendUserPassword({password = dados.valid_login.password}={}) {
		await cy.get(loginPageElements.login_user_password()).type(password)
	}

	async clickBtLogin() {
		await cy.get(loginPageElements.login_sign_button()).click()
	}

	async getText(){
		await cy.get(loginPageElements.login_error_message()).should('contain','Houve um problema')

	}
}
export default LoginPage
