const sender = require("../config/emailConfig");

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

module.exports = {
  sendBasicEmail,
};
