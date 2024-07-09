import express from "express";
const Route = express.Router()
import shop_order_completeController from "../controller/shop_order_completeControllers.js"

Route.get("/",shop_order_completeController.index)

export default Route
