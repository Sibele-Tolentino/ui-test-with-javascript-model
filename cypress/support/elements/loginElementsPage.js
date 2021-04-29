
class LoginPageElements {
	constructor() {
		this.login_url = () =>  {return '#ng-app > main > header > div > svg'}
		this.login_user_email = () =>  {return '#ap_email'}
		this.login_user_password = () =>  {return '#password'}
		this.login_sign_button = () =>  {return '#continue'}
		this.login_error_message = () =>  {return '#auth-error-message-box > div > h4'}
	}
}
module.exports = new LoginPageElements();
