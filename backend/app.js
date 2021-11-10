const express = require("express");
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const app = express();

app.use(express.json());
// const errorMiddleware = require("./middleware/error")
 

const PORT = 5000
app.listen(PORT,() => {
console.log("Server Started on PORT", PORT)
})

//Route import
// app.use("/api/v1",product);
// app.use("/api/v1",user);

//midddleware for error
// app.use(errorMiddleware)

module.exports = app