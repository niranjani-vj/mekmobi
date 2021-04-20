// // const router = require('express').Router();
// // TWILIO_ACCOUNT_SID="AC39142b48bec8f5ab2c7119139d873e6d"
// // TWILIO_AUTH_TOKEN="799b1e853ad847267c8341089de78199"
// // const twilio = require('twilio')(
// //     TWILIO_ACCOUNT_SID,
// //   TWILIO_AUTH_TOKEN
// // );
// // const verifyController = require('../controllers/verifyController');

// // router.get('/getcode', verifyController.getCode);
// // router.get('/verifycode', verifyController.verifyCode);
// // // router.route("/").get((req, res) => {
// // //   console.log
// // // })
// // // router.route("/getcode").get((req, res) => {
// // //   //console.log("code")
// // //   twilio.verify
// // //   .services('VAac9a9793c2d53c2b8ffa19487943848b')
// // //   .verifications
// // //   .create({to: '+918553482020', channel: 'sms'})
// // // //  .then(verification => console.log(verification.status));
// // //     .then(data => {
// // //       res.status(200).send(data);
// // //   })
// // // });
// // module.exports = router;


// // rs

// // twilio.messages.create({
// //     from: +13239848768,
// //     to: +918892198992,
// //     body: "Hey Vishal! Your project demo is scheduled tomorrow - Mekvahan"
// //   }).then((messsage) => console.log(message.sid));
  
// // twilio.verify.services.create({friendlyName: 'My First Verify Service'})
// // .then(service => console.log(service.sid));

// // // twilio.verify.services('VAe25e7bd1a857b7db065312d964d68c00')
// // // .verifications
// // // .create({to: '+919900869195', channel: 'sms'})
// // // .then(verification => console.log(verification.status));

// // twilio.verify.services('VAe25e7bd1a857b7db065312d964d68c00')
// //              .verifications
// //              .create({to: '+918553482020', channel: 'call'})
// //              .then(verification => console.log(verification.status));
// // twilio.verify.services('VAac9a9793c2d53c2b8ffa19487943848b')
// //       .verificationChecks
// //       .create({to: '+919632581938', code: '2597'})
// //       .then(verification_check => console.log(verification_check.status));
// export default router;