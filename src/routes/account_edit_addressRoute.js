import express from "express";
const Route = express.Router()
import account_edit_addressController from "../controller/account_edit_addressControllers.js"

Route.get("/",account_edit_addressController.index)
Route.post("/billing",account_edit_addressController.billing)
Route.post("/shipping",account_edit_addressController.shipping)

export default Route
