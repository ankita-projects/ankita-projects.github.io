//SCHEMA TAKES TYPES OF DATA AND STRUCTURE OF DATA DATABASE TAKE

import mongoose from "mongoose";

const Schema = mongoose.Schema;      //variable that holds schema from mongoose

 const playerSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone:{
        type: Number,
    },
    iscoach: {
        type:Boolean,
        default: false
    },
    team:{
        type: String,
    },
    strength:{
        type: Number,
        enum:[1,2,3]
    },
    endurance:{
        type:Number,
        enum:[1,2,3]
    },
    ability:{
        type:Number,
        enum:[1,2,3]
    },
    techniques:{
        type:Number,
        enum:[1,2,3]
    },
    tactical:{
        type:Number,
        enum:[1,2,3]
    },
    created_date:{
        type: Date,
        default: Date.now
    }

});
module.exports = mongoose.model('Player', playerSchema);