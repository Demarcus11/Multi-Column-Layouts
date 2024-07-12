import express from "express";
import {
  getPlants,
  getPlant,
  createPlant,
  updatePlant,
  deletePlant,
} from "../controllers/plantsController.js";
import { upload } from "../server.js";

const plantRouter = express.Router();

// GET - Get all plants
plantRouter.get("/", getPlants);

// GET - Get a plant
plantRouter.get("/:id", getPlant);

// CREATE - Create a plant
plantRouter.post("/", upload.single("add-plant-input-img"), createPlant);

// UPDATE - Update a plant
plantRouter.patch("/:id", updatePlant);

// DELETE - Delete a plant
plantRouter.delete("/:id", deletePlant);

export default plantRouter;
