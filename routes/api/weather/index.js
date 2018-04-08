import express from "express";
import * as controller from "./weather.controller.js";

export const router = express.Router();

// Create last layer of API call so a POST request to /api/count/start
// will run the "start" function the controller
router.post("/", controller.get);
router.post("/add", controller.add);