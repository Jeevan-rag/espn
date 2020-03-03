import { Given, When, Then } from "cucumber";
import loginPage from "../pageobjects/loginPage";
import BasePage from "../pageobjects/BasePageObject";
import logout from "../pageobjects/logoutPage";
import logoutPage from "../pageobjects/logoutPage";
import Search from "../pageobjects/Search";
let assert = require("chai").assert;
let expect = require("chai").expect;

Given(/^I'm on the Home page$/, function() {
  browser.maximizeWindow();
  BasePage.OpenUrl();
  var expectedTitle = "ESPN: Serving sports fans. Anytime. Anywhere.";
  var actualTitle = browser.getTitle();
  expect(actualTitle).to.equal(expectedTitle);
});

When(/^I click on log in option$/, function() {
  loginPage.logInBtn().click();               //clicks on logIn 
  assert.exists(loginPage.logInBtn(),'login button is present');
});

When(/^I shall be on login page$/, function() {
  browser.switchToFrame($("#disneyid-iframe")); //swithes to userinput frame
  assert.exists(loginPage.UserInput());
});

When(/^I login with valid user credentials$/, function() {
  loginPage.loginWithValidCredentials();
});

Then(/^I should be logged in successfully$/, function() {
  assert.isFalse(loginPage.logInBtn().isDisplayed());
  logoutPage.UserProfilePanel().click(); // container
  logout.logoutBtn().click();            //clicks on logout
  browser.pause(3000);
});

When(/^I login with invalid user credentials$/, function() {
  loginPage.loginWithInvalidCredentials();
  browser.pause(3000);
});

Then(/^I should not get logged in$/, function() {
  assert.isTrue(loginPage.InvalidText().isDisplayed()); //displays error message
});

When(/^I click on search option$/, function() {
  assert.isTrue(Search.SearchIcon().isEnabled());
  Search.SearchIcon().click();
  console.log("Clicked on the search button.");
});

Then(/^I should see user input section$/, function() {
  assert.isTrue(Search.SearchInput().isDisplayed());    //displays search i/p area
});

// When(/^When I search sports,teams,players$/, function () {
//     console.log(" im seeing this message");
//     var usertext=browser.$('//*[@id="global-search"]/input[1]').setValue("Dhoni");
//     browser.pause(3000);
//     browser.$('.search').click();

//  });

//  Then(/^I should see related results for my input$/, function () {
//     var resultsearch=$('//*[@id="fittPageContainer"]/div[2]/div/div/div[3]/section/div/ul/div/div[2]/li/article/a/div/h2/div').isDisplayed();
//     console.log.getText(resultsearch);
// });
