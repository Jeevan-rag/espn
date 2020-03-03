class LogoutPage {
    
    // loginbtn() {
    //     return $("#sideLogin-left-rail > button.button-alt.med");
    //  }
    logoutBtn() {
        return $('//*[@id="global-header"]/div[2]/ul/li[2]/div/div[1]/ul[1]/li[5]/a');
    }
    UserProfilePanel(){
        return $("//a[@id='global-user-trigger']");
    }


    // loginButton(){
        // this.loginbtn.click();
    // }
    // logoutButton(){
    //  this.logoutBtn();

//  }

}
export default new LogoutPage();