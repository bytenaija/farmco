let mongoose = require("mongoose");
let Schema = mongoose.Schema();
let Profile = require("./profile");

let ProfileSchema = new mongoose.Schema({
    email : {},
    password : {},
    username : {},


})


module.exports = Profile = mongoose.model("Profile", ProfileSchema)