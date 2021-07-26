@loginPage
Feature: Validate login page 

     As a user 
     I want to verify that I can login successfully
     to the depop web portal

     Background: User launches depop home page
          Given I have launched the depop web portal
          And I click on login link on home page
     
     @loginLanding @testLogin
     Scenario: Validate the login page
          Then I should be redirected to the login page


     @loginSuccess @testLogin
     Scenario Outline: Validate user is able to login with correct username/email and password
          When I login with "<username>" and "<password>"
          Then I should redirected to the products page

          Examples:
              | username                    | password     | 
              | parminderdhiman84           | Depop@test12 | 
              | parminderdhiman84@gmail.com | Depop@test12 |


     @incorrectUsernamePass @testLogin
     Scenario Outline: Validate user is not able to login if username or password is incorrect
          When I login with "<username>" and "<password>"
          Then I should get error message "Incorrect username or password. Check your details and try again."

          Examples:
              | username          | password   |
              | parminderdhiman8  | Depop@test12 |
              | parminderdhiman84 | Depop@test1  |

     
     @blankUsernamePass @testLogin
     Scenario: Validate user is not able to login if username and password is blank
          When I click on login button
          Then I should get username error as "Username or email is required"
          And I should get password error as "Password is required"


     @ForgotPasswordRedirect @testLogin
     Scenario: Validate user is redirected to password reset page
          When I want to reset my password
          Then I should be redirected to password reset page


     @SignupRedirect @testLogin
     Scenario: Validate user is redirected to sign up page from top signup button
          When I want to sign up using top signup button
          Then I should be redirected to signup page "https://signup.depop.com/"


     @SignupRedirect @testLogin
     Scenario: Validate user is redirected to sign up page from bottom signup button
          When I want to sign up using bottom signup button
          Then I should be redirected to signup page "https://signup.depop.com/"


     ###########################################
     #TESTS BELOW ARE NOT AUTOMATED
     ###########################################

     @blankUsername
     Scenario: Validate error message if username is blank
          When I enter password as "test@12"
          When I click on login button
          Then I should get username error as "Username or email is required"

     @blankPassword
     Scenario: Validate error message if password is blank
          When I enter username as "test@12"
          When I click on login button
          Then I should get password error as "Password is required"


     @usernamePasswordLabel
     Scenario: Validate username and password label
          When I verify username label as "Username or email address*"
          And I verify password label as "Password*"


     @showHidePassword
     Scenario: Validate show password makes password as text input
          When I enter password as "test12"
          And I click the show password icon
          Then I verify password is text input type


     @showHideTooltip
     Scenario: Validate show/hide password tooltip
          Then I verify tooltip of eye icon is "Show Password"
          When I click the show password icon
          Then I verify tooltip of eye icon is "Hide Password"


     @searchbox
     Scenario: Validate I can search products on login page
          When I want to search products
          Then I should be presented with search box


     @facebookRedirect
     Scenario: Validate user is redirected to facebook login page
          When I want ot login using facebook
          Then I should be redirected to facebook login page

   

