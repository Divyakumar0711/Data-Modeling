import mongoose from "mongoose";

const categoryScehma = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})

export const Category = mongoose.model("Category", categoryScehma)