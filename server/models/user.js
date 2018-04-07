import { SchemaTypes } from "mongoose";

let mongoose = require("mongoose");
let Schema = mongoose.Schema();

let userSchema = new Schema({
    email : {},
    password : {},
    username : {},
    profile : {Type : SchemaTypes.ObjectId, ref: Profile}

})

userSchema.pre('save', function(){
    user = this;
    if(!user.isModified()) return;

    
})