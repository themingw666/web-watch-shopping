import express from "express"
import pageRoute from "./pageRoute.js"
import loginRoute from "./loginRoute.js"
import account_dashboardRoute from "./account_dashboardRoute.js"
import fakedataRoute from "./fakedataRoute.js"
import blog_list1Route from "./blog_list1Route.js"
import shop1Route from "./shop1Route.js"
import aboutRoute from "./aboutRoute.js"
import cartRoute from "./cartRoute.js"
import shop_checkoutRoute from "./shop_checkoutRoute.js"
import shop_order_completeRoute from "./shop_order_completeRoute.js"
import addRoute from "./addRoute.js"
import registerRoute from "./registerRoute.js"
import account_edit_addressRoute from "./account_edit_addressRoute.js"
const Route = express.Router()

Route.use("/login",loginRoute)
Route.use("/register",registerRoute)
Route.use("/account_dashboard",account_dashboardRoute)
Route.use("/blog_list1",blog_list1Route)
Route.use("/shop1",shop1Route)
Route.use("/about",aboutRoute)
Route.use("/cart",cartRoute)
Route.use("/shop_checkout",shop_checkoutRoute)
Route.use("/shop_order_complete",shop_order_completeRoute)
Route.use("/fakedata666888",fakedataRoute)
Route.use("/add",addRoute)
Route.use("/account_edit_address",account_edit_addressRoute)
Route.use("/",pageRoute)

export default Route