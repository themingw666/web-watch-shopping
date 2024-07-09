import express from "express";
const Route = express.Router()
import pageController from "../controller/pageControllers.js"

Route.get("/",pageController.index)

export default Route
