const express = require('express');
const mongoose = require('mongoose');
// const cors = require('cors');
const connectDB = require("./config");
const bodyParser = require('body-parser');
// require('dotenv/config');
const dotenv = require("dotenv");
const verifyToken = require("./middleware/validate-token");
const authRoutes = require("./routes/auth.js");
const userRoutes = require("./routes/user-logged");


const app = express();
dotenv.config();
connectDB();

app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: true })) // parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.json())
app.use(express.json()); // for body parser


// home page Routes
app.get('/', (req, res) => {
    //res.send('We are on HomePage')
    res.render('pages/auth');
});

// public route anyone can access 
// route middlewares
app.use("/", authRoutes);

// admin route only logged in user can access
// this route is protected with token
app.use("/user", verifyToken, userRoutes);



app.listen(process.env.PORT || 5000, () => {
    //onsole.log("Server is listening on port 5000");
    console.log(`Running on http://${process.env.HOST}:${process.env.PORT}`);
});