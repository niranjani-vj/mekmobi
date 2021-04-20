const router = require("express").Router();
// TWILIO_ACCOUNT_SID = "AC39142b48bec8f5ab2c7119139d873e6d";
// TWILIO_AUTH_TOKEN = "799b1e853ad847267c8341089de78199";
const twilio = require("twilio")(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);



exports.getCode = async (req, res) => {
  console.log("code")
  twilio.verify
    .services("VA406d5c371b605104b4e4e6ea0fbb6562")
    .verifications.create({ to: "+918553482020", channel: "sms" })
    .then(data => {
      res.status(200).send(data);
  })
};

exports.verifyCode = async (req, res) => {
  twilio.verify
  .services("VAac9a9793c2d53c2b8ffa19487943848b")
  .verificationChecks.create({ to: "+918553482020", code: "2597" })
    .then((verification) => console.log(verification.status));
};
