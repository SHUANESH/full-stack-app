const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./DB/index');
const express = require('express');
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(cors());
const newsUserRoute = require('./route/UserRouting')
connectDB.on('error' ,() => {
    console.log(("error"));
})
const PORT = process.env.PORT || 8080;

app.get('/' , (req , res)=>{
    try {
        console.log("home page");
        
    } 
    catch (error) {
        console.log("error pleas try liter");
        res.send("error pleas try liter")
    }
    
});

// app.use('/user' ,newsUserRoute);


app.listen(PORT ,(error) => {
    if(error) return "error"
      console.log("we're on air");
});