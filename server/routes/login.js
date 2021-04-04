const router = require("express").Router();
TWILIO_ACCOUNT_SID = "AC39142b48bec8f5ab2c7119139d873e6d";
TWILIO_AUTH_TOKEN = "799b1e853ad847267c8341089de78199";
const twilio = require("twilio")(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
let User = require("../model/users");
router.route("/").get((req, res) => {
  console.log("Heloo!");
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/add").post((req, res) => {
  const phone = req.body.phone;
  const password = req.body.password;
  const newUser = new User({
    phone,
    password,
  });
  twilio.verify
    .services("VAac9a9793c2d53c2b8ffa19487943848b")
    .verifications.create({ to: phone, channel: "sms" })
    .then((verification) => console.log(verification.status));
    //const opt = req.body.otp;
    // twilio.verify.services('VAac9a9793c2d53c2b8ffa19487943848b')
    //   .verificationChecks
    //   .create({to: phone, code: otp})
    //   .then(verification_check => console.log(verification_check.status));
      if(verification_check.status=="approved"){
        newUser
        .save()
        .then(() => res.json("User added"))
        .catch((err) => res.status(400).json("Error:" + err));
      }else{
          console.log("status: "+verification_check.status)
      }
 
});

module.exports = router;
