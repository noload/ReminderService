const envObj = require("dotenv");
envObj.config();

module.exports = {
  PORT: process.env.PORT,
  emailID: process.env.emailID,
  Email_PASS: process.env.Email_PASS,
};
