const TicketService = require("../services/email-service");

const create = async (req, res) => {
  try {
    const response = await TicketService.createNotification(req.body);
    return res.status(202).json({
      success: true,
      data: response,
      err: {},
      message: "Successfully registered as email reminder",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: [],
      error: error,
      message: "Unable to register an email reminders",
    });
  }
};

module.exports = {
  create,
};
