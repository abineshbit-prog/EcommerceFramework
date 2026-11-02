
import { test } from "@playwright/test";
import Login from "../POM/Loginpage.js";
import fs from "fs";

let userData = fs.readFileSync(
    "C:/Users/Abinesh Bala/OneDrive/Documents/Desktop/Sauce demo/EcommerceFramework/Test-Data/login.json",
    "utf8"
);

userData = JSON.parse(userData);

let url = userData.url;
let username = userData.username;
let password = userData.password;

test("login to saucedemo", async ({ page }) => {
    let login = new Login(page);
    await login.LoginToSauceDemo(url, username, password)
    
});
