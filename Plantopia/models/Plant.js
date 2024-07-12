import { DataTypes } from "@sequelize/core";
import { sequelize } from "../db/connect.js";

const Plant = sequelize.define("plant", {
  plantId: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
});

export default Plant;
