const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,       // tarabia_db
  process.env.DB_USER,       // tarabia_db_user
  process.env.DB_PASS,       // password
  {
    host: process.env.DB_HOST,  // dpg-xxxx
    port: process.env.DB_PORT,  // 5432
    dialect: "postgres",
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

module.exports = sequelize;
