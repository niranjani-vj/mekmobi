const router = require('express').Router();
let User = require('../model/users');
router.route('/').get((req,res)=>{
  console.log("Heloo!")
    User.find()
    .then(users => res.json(users))
    .catch(err =>res.status(400).json('Error:'+err));
});

router.route('/add').post((req,res)=>{
  
    const phone = req.body.phone;
    const password = req.body.password;
    const newUser = new User({
        phone,
        password
    });
    newUser.save()
    .then(()=>res.json('User added'))
    .catch(err => res.status(400).json('Error:'+err));
});

module.exports= router;