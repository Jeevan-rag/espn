class LoginPage {
  get userName() {
    return $("//input[@type='email']");
  }
  get password() {
    return $("//input[@type='password']");
  }
  get submitBtn() {
    return $(".btn.btn-primary.btn-submit.ng-isolate-scope");
  }

  logInBtn() {
    return $("#sideLogin-left-rail > button.button-alt.med");
 }
 UserInput(){
   return  $("//input[@type='email']");
 }
  // login Function
  loginWithValidCredentials() {
    this.userName.setValue("jeevantestespn@gmail.com");
    this.password.setValue("ABC3940");
    this.submitBtn.click();
  }
  loginWithInvalidCredentials(){
    this.userName.setValue("invalidusernam@gmail.com");
    this.password.setValue("invalid123");
    this.submitBtn.click();

  }
  InvalidText(){
    return $("#did-ui-view > div > section > div");
  }
}

export default new LoginPage();
