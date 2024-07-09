import express from "express";
const Route = express.Router()
import loginController from "../controller/loginControllers.js"

Route.get("/",loginController.index)
Route.post("/",loginController.handleLogin)
Route.get("/logout",loginController.logout)

export default Route