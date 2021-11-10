// const app = require('./app');

// const dotenv = require('dotenv');
// const connectDatabase= require("./config/database")

//Uncaught error
// process.on("uncaughtException",(err)=>{
//     console.log("Error:",err.message);
//     console.log("Shutting down the server duw to uncaught error");
//     process.exit(1); 
// })

//config
// dotenv.config({path:"backend/config/config.env"});

//connecting database after config
// connectDatabase()

//  app.listen(process.env.PORT,() => {
        
//     console.log('Server is working on http://localhost:',process.env.PORT)
// });


//Unhandled Promise Rejection
// process.on("unhandledRejection",(err) => {
//     console.log("Error",err.message);
//     console.log("Shutting down server");

//     server.close(()=>{
//         process.exit(1);
//     });
// });