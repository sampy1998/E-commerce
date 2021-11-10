const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({

    name:{
        type: String,
        required:[true,"Please enter your name "],
        maxlength:[30,"Name cannot exceed 30 character"],
        minlength:[4,"Name should have more than 4 character"]
    },

    email:{
        type:String,
        required:[true, "Please enter you Email"],
        unique:true,
    },

    password:{
        type:String,
        required:[true, "Please Enter Your Password"],
        minlength:[8, "Password Should be greater than 8 charater"],
        select:false,
    },
    avatar:{
        public_id: {
            type: String,
            required: true,
          },
          url: {
            type: String,
            required: true,
          },
    },

    role:{
        type:String,
        default:"user"
    },

    createdAt:{
        type: Date,
        default:Date
    },

    resetPasswordToken:String,
    resetPasswordExpire: Date,
});
 module.exports = mongoose.model("User", userSchema);