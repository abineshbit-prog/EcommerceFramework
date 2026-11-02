class checkout
{
    constructor(page){
        this.page=page;
        this.first_name=page.getByplaceholder("First Name")
        this.last_name=page.getByplaceholder("Last Name")
        this.zipcode=page.getByplaceholder("Zip/Postal Code")
        this.cancel=page.getByRole('button',{name:"cancel"})
        this.conitue=page.getByRole('button',{name:"continue"})
        this.errormessage=page.locator(".error-message-container.error")
        
    }
    async fillYourInfo(){
        await this.first_name.fill("Abinesh")
        await this.last_name.fill("B")
        await this.zipcode.fill(625512)
    }
    async clickOnCancelButton()
    {
        await this.cancel.click()
    }
    async clickOnContinueButton()
    {
        await this.conitue.click()

    }
    async fillAndContinue()
    {
        await this.fillYourInfo()
        await this.clickOnContinueButton()
    }
    async errorOnCheckout()
    {
        await this.errormessage()
    }
}
export default checkout;
