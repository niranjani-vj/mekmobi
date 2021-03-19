const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const primarySchema = new Schema({
    
    s_no:{
        type:String,
        minlength:10,
        required:true
    },
    brand_name:{
        type:String,
        required:true
    },
    model_year:{

    },
    fuel_type:{

    },
    engine_oil:{

    },
    coolant:{

    },
    air_filter:{

    },
    oil_filter:{

    },
    spark_plug:{

    },
},{
    timestamps:true,
});

const User = mongoose.model('User',primarySchema);
module.exports = User;
