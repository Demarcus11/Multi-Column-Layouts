import Plant from "../models/Plant.js";

// @desc  Get all plants
// @route GET /api/plants
export const getPlants = async (req, res) => {
  try {
    // going to have to do a query using "where" clause when we add users to only get plants for logged in user
    const plants = await Plant.findAll();
    if (plants.length === 0) {
      res.status(404).json({ msg: "No plants found" });
      return;
    }
    res.status(200).json({ plants });
  } catch (error) {
    console.log("Error fetch plants...", error);
  }
};

// @desc  Get a plant
// @route GET /api/plants/:id
export const getPlant = async (req, res) => {
  try {
    const plant = await Plant.findOne({ where: { plantId: req.params.id } });
    if (plant.length === 0) {
      res.status(404).json({ msg: "No plant found" });
      return;
    }
    res.status(200).json({ plant });
  } catch (error) {
    console.log("Error fetch plant...", error);
  }
};

// @desc  Create a plant
// @route POST /api/plants
export const createPlant = async (req, res) => {
  try {
    const plant = await Plant.findOne({ where: { plantId: req.params.id } });
    const { location, nextWatering, wateringFrequency } = req.body;
    if (!location || !nextWatering || !wateringFrequency) {
      res
        .status(400)
        .json({ msg: "Please enter a location, next watering, and watering frequency" });
      return;
    }
    if (plant.length === 0) {
      res.status(404).json({ msg: "No plant found" });
      return;
    }
    res.status(201).json({ plant });
  } catch (error) {
    console.log("Error creating plant...", error);
  }
};

// @desc  Update a plant
// @route PATCH /api/plants/:id
export const updatePlant = (req, res) => {
  res.send("Update Plant");
};

// @desc  Delete a plant
// @route DELETE /api/plants/:id
export const deletePlant = (req, res) => {
  res.send("Delete Plant");
};
