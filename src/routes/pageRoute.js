import express from "express";
const Route = express.Router()
import pageController from "../controller/pageControllers.js"

Route.get("/account_orders",pageController.index1)
Route.get("/account_edit",pageController.index3)
Route.get("/account_wishlist",pageController.index4)
Route.get("/",pageController.index)

export default Route
