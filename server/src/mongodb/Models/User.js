const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email:{
        type: String,
        max: 50,
        unique: true
    },
    mobile:{
        type: String,
        maxlength :12,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 4
    },
    name:{
        type:String,
        required: true,
    },
    gender:{
        type: Number,
        required: true,
        enum: [1,2]  //1 is male and 2 is female
    },
    age:{
        type:Number,
        required: true,
    },
    address:{
        type: String
    },
    city:{
        type: String
    },
    country:{
        type: String
    },
    role:{
        type: Number,
        default: 1, // 1 is user and 2 is admin
        enum: [1, 2]
    }

},
{timestamps: true}

);

module.exports = mongoose.model("User", UserSchema);