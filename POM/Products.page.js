class Product
{
    constructor(page){
        this.page=page;
        this.menuBar=page.locator(".bm-burger-button")
        this.cartIcon=page.locator(".shopping_cart_link")
        this.cartBadge=page.locator(".shopping_cart_badge")
        this.logout=page.locator(".bm-item.menu-item")
        this.title=page.locator(".title")
        this.sprtDropdown=page.locator(".product_sort_container")
        this.removeBtn=page.getByRole("Button",{name:'Remove'})
        this.AddToCartBtn=page.getByRole("Button",{name:"Add to cart"})
        this.productItem=page.locator(".inventory_item")
        this.productname=page.locator(".inventory_item_name ")
        this.productprice=page.locator(".inventory_item_price")
    }
    async Addtocart()
    {
     await this.AddToCartBtn

    }
}
export default Product;