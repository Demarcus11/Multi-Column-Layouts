import { Sequelize } from "@sequelize/core";
import { PostgresDialect } from "@sequelize/postgres";

export const sequelize = new Sequelize({
  dialect: PostgresDialect,
  database: `${process.env.PGDATABASE}`,
  user: `${process.env.PGUSER}`,
  password: `${process.env.PGPASSWORD}`,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
});
