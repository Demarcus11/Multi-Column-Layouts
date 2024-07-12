import express from "express";
import path from "path";
import plantRouter from "./routes/plants.js";
import { fileURLToPath } from "url";
import { sequelize } from "./db/connect.js";
import {
  getPlant,
  getPlants,
  createPlant,
  updatePlant,
  deletePlant,
} from "./controllers/plantsController.js";
import path from "path";
import multer from "multer";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

// Initialize server
const server = express();

// Body parser
server.use(express.json());

// Static folder
server.use(express.static(path.join(__dirname, "public")));

// Router
server.use("/api/plants", plantRouter);

// Image upload middleware
const storage = multer.diskStorage({
  destination: (req, file, fn) => {
    fn(null, "images");
  },

  filename: (req, file, fn) => {
    console.log(file);
    fn(null, Date.now() + path.extname(file.originalname));
  },
});
export const upload = multer({ storage });

// Start server
const PORT = process.env.PORT || 5000;
const start = async () => {
  sequelize.sync({ force: true });
  server.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`);
  });
};

start();
