import express from "express";
const Route = express.Router()
import registerController from "../controller/registerControllers.js"

Route.post("/",registerController.index)
Route.post("/check",registerController.check)

export default Route
