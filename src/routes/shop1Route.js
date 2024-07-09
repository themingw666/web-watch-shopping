import express from "express";
const Route = express.Router()
import shop1Controller from "../controller/shop1Controllers.js"

Route.get("/",shop1Controller.index)

export default Route
