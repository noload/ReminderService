const express = require("express");
const bodyParser = require("body-parser");
const { sendBasicEmail } = require("./src/services/email-service");

const { PORT } = require("./src/config/serverConfig");

const cron = require("node-cron");

const setupAndStartService = () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log("server started at ", PORT);
    // sendBasicEmail(
    //   "suport@admin.com",
    //   "vaibhav321k321@gmail.com",
    //   "this is testing mail2",
    //   "hey how are you bro here we are"
    // );

    cron.schedule("* * * * *", () => {
      console.log("running a task every minute");
    });
  });
};

setupAndStartService();
