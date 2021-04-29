import homePageElements from '../elements/homeElementsPage'

class HomePage{
    access_login_page (){
        cy.get(homePageElements.entrar_button()).click()
    }
}
export default HomePage
