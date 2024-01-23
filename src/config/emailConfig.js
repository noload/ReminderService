const nodemailer = require("nodemailer");

const { emailID, Email_PASS } = require("./serverConfig");

const sender = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: emailID,
    pass: Email_PASS,
  },
});

module.exports = sender;
