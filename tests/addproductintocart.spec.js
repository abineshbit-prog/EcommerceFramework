import{test} from"@playwright/test"
import Product from "../POM/Products.page"
import Login from"../POM/Loginpage.js"
test("addproducttocart",async({page})=>{
    let product=new Products(page)
    let login=new Login(page)
    await login.LoginToSauceDemo()
    await product.AddToCart()
    await product.opencart()


})