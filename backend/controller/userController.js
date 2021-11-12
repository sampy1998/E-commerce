const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const User = require("../models/userModels");
const sendToken = require("../utils/jwtToken");

//Register User
const registerUser = catchAsyncError (async (req,res,next) => {
        const {name,email,password} = req.body;

        const user = await User.create({
            name,
            email,
            password,
            avatar: {
                public_id:"this is a sample image",
                url:"profilepic"
            },
        });
        
        sendToken(user, 201, res);
    });

    //Login User
    const loginUser = async(req,res,next) => {
        const {email, password} = req.body;
        const isUserValid = await User.findOne({ email }).select("+password")

        try {
           //checking if user has given right password
              if(!email || !password){
                return res.status(200).json({ success: false, message: 'Please enter email and password'}) //incoreect password or email
              }
              

              if (!isUserValid) {
                return res.status(200).json({ success: false, message: 'Invalid email or password 42'})
              }

              const isPasswordMatched = await isUserValid.comparePassword(password)
              
              if(!isPasswordMatched){
                return res.status(200).json({ success: false, message: 'Invalid email or password 48'})
              }

        } catch (error) {
            res.status(500).json({ success: false, message: 'Server Error'})
        }

        sendToken(isUserValid,200,res);
    };





// const loginUser = async(req,res) => {
// try {
//     const { email, password } = req.body
//     const isUserValid = await User.findOne({ email })

//     if(isUserValid){
//         //password-check ->bcrypt
//         if(passwordmatch){
//         return res.status(200).json({ success: true, message: 'Invalid Credentials'}) //jwt token 

//         }else{
//         return res.status(400).json({ success: false, message: 'Invalid Credentials'}) //password incorrect

//         }
//     }else{
//         return res.status(400).json({ success: false, message: 'Invalid Credentials'}) //email incorrect
//     }

// } catch (err) {
//     res.status(500).json({ success: false, message: 'Server Error'})
// }

// const token = use

// }

module.exports = {
    registerUser,
    loginUser
}