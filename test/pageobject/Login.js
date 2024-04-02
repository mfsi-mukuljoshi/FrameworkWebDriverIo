class LoginPage{

    get userName(){
        return $('//input[@name="username"]');
    }

    get enterPassword(){
        return $('//input[@name="password"]');
    }

    get loginBtn()
    {
        return $('//button[@type="submit"]')
    }

    async loggingIn()
    {
        await this.userName.setValue("Admin")
        await this.enterPassword.setValue("admin123")
        await this.loginBtn.click()
    }

}

module.exports = new LoginPage()