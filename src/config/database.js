require('dotenv').config();
const { Sequelize } = require("sequelize");

const connectDB = (options) => {
  try {
    const sequelize = new Sequelize(process.env.DB_URI, {
      logging: false, // Don't log queries.
      dialect: "mysql"
    });

    if (options && options.verbose) {
      console.log("Connected to the database");
    }
    
    return sequelize;
  } catch (err) {
    // throw new Error("Could not connect to the database\n" + err.msg);
    throw err
  }
};

module.exports = { connectDB };