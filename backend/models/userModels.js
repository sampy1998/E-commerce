const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

userSchema.pre("save", async function(next){
   
    if(!this.isModified("password")){
        next();
    }

    this.password = await bcrypt.hash(this.password, 10)
});

// JWT token
userSchema.methods.getJWTToken = function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET, {
        expiresIn:process.env.JWT_EXPIRE,
    })
};

//compare password
userSchema.methods.comparePassword = async function(enteredPassword){
   return await bcrypt.compare(enteredPassword, this.password)
}


 module.exports = mongoose.model("User", userSchema);