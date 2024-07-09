import express from "express";
const Route = express.Router()
import blog_list1Controller from "../controller/blog_list1Controllers.js"

Route.get("/",blog_list1Controller.index)

export default Route
