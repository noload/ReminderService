const envObj = require("dotenv");
envObj.config();

module.exports = {
  PORT: process.env.PORT,
};
