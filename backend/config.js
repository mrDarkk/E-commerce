const mongoose = require('mongoose');
const dotenv =  require('dotenv').config();

const Url = `mongodb+srv://${process.env.DATABASEUSER}:${process.env.DATABASEPASS}@cluster0.ahg4r.mongodb.net/${process.env.DATABASENAME}?retryWrites=true&w=majority`;

const connectDB = async() => {
    await mongoose.connect(Url, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log("database connected !")
};

module.exports = connectDB;