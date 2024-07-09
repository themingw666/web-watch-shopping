import express from "express";
const Route = express.Router()
import cartController from "../controller/cartControllers.js"

Route.get("/",cartController.index)
Route.post("/update",cartController.update_cart)

export default Route
