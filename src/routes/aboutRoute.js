import express from "express";
const Route = express.Router()
import aboutController from "../controller/aboutControllers.js"

Route.get("/",aboutController.index)

export default Route
