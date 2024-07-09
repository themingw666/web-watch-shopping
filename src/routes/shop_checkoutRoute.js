import express from "express";
const Route = express.Router()
import shop_checkoutController from "../controller/shop_checkoutControllers.js"

Route.get("/",shop_checkoutController.index)
Route.post("/",shop_checkoutController.postform)

export default Route
