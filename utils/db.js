import Sequelize from "sequelize";
import "dotenv/config";

const config = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "root",
  DB: "proyecto",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  dialectOptions: {
    useUTC: false // for reading from database
  },
  timezone: "-05:00" // for writing to database
});
/*
sequelize.sync({ force: false }).then(() => {
  console.log("tablas sincronizadas");
});
*/
export const test = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    console.error("----------------------", error);
  }
};

const db = {};

db.sequelize = sequelize;

export default db;