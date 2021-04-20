const express = require('express');
const bodyParser  = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app =express();
const port = process.env.PORT || 5000;
app.use(cors());
//app.use(express.json());
//app.use(require('connect').bodyParser);

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
//app.use(app.router);
const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true });
const connection= mongoose.connection;
connection.once('open',()=>{
    console.log("Mongodb Connected!....")
    
})
const login = require("./routes/login")
//const sms = require('./routes/sms')
app.get('/',(req,res)=>{
         console.log("Heloo!")
});


app.use('/login',login)
// app.use('/sms',sms)

app.listen(port,()=>{ 
    console.log(`Server is connected to the posrt:${port}`);
});
