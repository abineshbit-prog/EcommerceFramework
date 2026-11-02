class Login
{
    constructor(page){
        this.page=page;
        this.username=page.getByplaceholder("Username")
        this.password=page.getByplaceholder("Password")
        this.loginButton=page.getByRole('Button',{name:"Login"})
        this.errorMsg=page.locator(".error-message-container.error")
    }
    async goto(){
        await this.goto("https://www.saucedemo.com/")
    }
    async LoginToSauceDemo(url,username,password)
    {
         await this.goto(url)
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginButton.click()
    }
    async clickOnLoginBtn()
    {
        await this.loginButton.click()
    }
    async getErrorMsg()
    {
        await this.errorMsg.textContent()
    }
}