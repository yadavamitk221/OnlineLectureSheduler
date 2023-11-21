const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://yadavamitk221:5pKqnMKTN8TZPKsa@cluster0.rhhuolk.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('err', console.error.bind(console, "Error in connecting to the database"));

db.once("open", function(){
    console.log("Connected to database :: Mongodb");
});