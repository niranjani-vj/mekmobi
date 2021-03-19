const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    
    phone:{
        type:String,
        minlength:10,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true,
});

const User = mongoose.model('User',userSchema);
module.exports = User;
