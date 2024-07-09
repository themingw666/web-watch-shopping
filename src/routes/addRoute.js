import express from "express";
const Route = express.Router()
import addController from "../controller/addControllers.js"

Route.get("/",addController.index)

export default Route
