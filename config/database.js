const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" });

const conectDB = async () => {
  try {
    // conectar mongo
    mongoose.Promise = global.Promise;
    mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
    });
    console.log("bd bien");
  } catch (error) {
    console.log(error);
    process.exit(1); // se detiene la aplicación
  }
};

module.exports = conectDB;
