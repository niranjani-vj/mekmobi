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

  newUser
    .save()
    .then(() => res.json("User added"))
    .catch((err) => res.status(400).json("Error:" + err));
});

// router.route("/getcode").get((req, res) => {
//   console.log("code")
//   twilio.verify
//     .services(process.env.VERIFY_SERVICE_SID)
//     .verifications.create({ to: "+918553482020", channel: "sms" })
//     .then(data => {
//       res.status(200).send(data);
//   })
// })

router.route("/getcode").post((req, res) => {
  console.log("code")
  const { phone } = req.body;

  // Check For Existing User
  User.findOne({ phone })
      .then(existingUser => {
          if(!existingUser) return res.status(400).json({ msg: 'User does not exist with this Mobile No.' });
          
          const digits = '0123456789';
          let otp = '';
          for (let i=0;i<6;++i) {
          otp += digits[Math.floor(Math.random() * 10)];
          }

          existingUser.password = otp;
          existingUser.save()
              .then(updatedUser => {
                  res.sendStatus(200);
              })
              .catch(err => {
                  res.status(500).json({ msg: 'Unable to save to database.' });
              });
})
});


module.exports = router;
