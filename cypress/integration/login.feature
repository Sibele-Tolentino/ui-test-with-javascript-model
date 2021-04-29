@login
Feature: Acces user page

   Feature I as a user want acces my own page

   Background: Acess base page
     Given I acess base page

   @login_if_invalid_user
   Scenario: Try to log in with an invalid user
      When I press login
      When I log in with an invalid user
      Then I see error login page