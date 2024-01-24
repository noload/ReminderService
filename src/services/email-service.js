const sender = require("../config/emailConfig");
const TicketRepository = require("../repository/ticket-repository");

const repo = new TicketRepository();

const sendBasicEmail = async (mailfrom, mailto, mailsubject, mailBody) => {
  try {
    const response = await sender.sendMail({
      from: mailfrom,
      to: mailto,
      subject: mailsubject,
      text: mailBody,
    });
  } catch (error) {
    console.log(error);
  }
};

const fetchPendingEmail = async (timeStamp) => {
  try {
    const response = await repo.get({
      status: "Pending",
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const createNotification = async (data) => {
  try {
    const response = repo.create(data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const updateTicket = async (ticketId, data) => {
  try {
    const response = await repo.update(ticketId, data);
    return response;
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  sendBasicEmail,
  fetchPendingEmail,
  createNotification,
  updateTicket,
};
