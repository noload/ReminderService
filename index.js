const express = require("express");
const bodyParser = require("body-parser");
const { sendBasicEmail } = require("./src/services/email-service");

const { PORT } = require("./src/config/serverConfig");
const TicketController = require("./src/controller/ticket-controller");
const jobs = require("./src/utils/job");

const setupAndStartService = () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post("/api/v1/tickets", TicketController.create);

  app.listen(PORT, () => {
    console.log("server started at ", PORT);
    jobs();
    // sendBasicEmail(
    //   "suport@admin.com",
    //   "vaibhav321k321@gmail.com",
    //   "this is testing mail2",
    //   "hey how are you bro here we are"
    // );
  });
};

setupAndStartService();
