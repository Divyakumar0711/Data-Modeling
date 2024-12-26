import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    addressLine1:{
        type:String,
        require:true,
    },
    addressLine2:{
        type:String,
        require:true,
    },
    city:{
        type:String,
        require:true
    },
    proviencr:{
        type:String,
        require:true
    },
    postalCode:{
        type:String,
        require:true
    },
    country:{
        type:String,
        require:true
    },
    specializationIn:[
        {
        type:String,
        require:true
    }
    ]
},{timestamps:true})

export const Hospital = mongoose.model("Hospital", hospitalSchema)