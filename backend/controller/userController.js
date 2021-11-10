const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const User = require("../models/userModels");

//Register User
const registerUser = catchAsyncError (async (req,res,next) => {

    console.log("hello")

        // const {name,email,password} = req.body;

        // const user = await User.create({
        //     name,
        //     email,
        //     password,
        //     avatar: {
        //         public_id:"this is a sample image",
        //         url:"profilepic"
        //     },
        // });                                                     

        // res.status(201).json({
        //     success:true,
        //     user, 
        // });
    });





const loginUser = async(req,res) => {
try {
    const { email, password } = req.body
    const isUserValid = await User.findOne({ email })

    if(isUserValid){
        //password-check ->bcrypt
        if(passwordmatch){
        return res.status(200).json({ success: true, message: 'Invalid Credentials'}) //jwt token 

        }else{
        return res.status(400).json({ success: false, message: 'Invalid Credentials'}) //password incorrect

        }
    }else{
        return res.status(400).json({ success: false, message: 'Invalid Credentials'}) //email incorrect
    }

} catch (err) {
    res.status(500).json({ success: false, message: 'Server Error'})
}
}

module.exports = {
    registerUser,
    loginUser
}