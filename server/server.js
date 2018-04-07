let express = require('express');
let app = express();
const mongoose = require("mongoose");
const mongodb = require("./config/jwt").mongodb;

let morgan = require("morgan");

app.use(express.json());
require('./config/passport');

//support parsing of application/x-www-form-urlencoded post data
app.use(express.urlencoded({ extended: true }));



app.use(morgan("dev"));

let port = process.env.PORT || 3000;

mongoose.connect(mongodb, (err)=>
{
    if(err) {
        throw err;
        System.exit(0);
    }
        

    console.log("Connected to mongodb database");
})
let userRoutes = require("./routes/user")

app.use("/api/user", userRoutes);
app.listen(port, function(err) {
    if(err) throw err;
    console.log("Server started on port " + port);
})