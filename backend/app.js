const express = require("express");
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const app = express();
const cookieParser = require("cookie-parser")


const errorMiddleware = require("./middleware/error")
app.use(express.json());
app.use(cookieParser());

// const PORT = 5000
// app.listen(PORT,() => {
// console.log("Server Started on PORT", PORT)


//Route import
app.use("/api/v1",product);
app.use("/api/v1",user);

//midddleware for error
app.use(errorMiddleware)

module.exports = app