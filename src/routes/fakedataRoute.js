import express from "express";
const Route = express.Router()
import fakedataController from "../controller/fakedataControllers.js"

Route.get("/",fakedataController.index)

export default Route