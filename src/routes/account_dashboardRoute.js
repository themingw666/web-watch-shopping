import express from "express";
const Route = express.Router()
import account_dashboardController from "../controller/account_dashboardControllers.js"

Route.get("/",account_dashboardController.index)

export default Route