import mongoose, { Schema } from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        require:true
    },
    productImage:{
        type: String,
        require:true
    },
    price:{
        type:Number,
        default:0
    },
    stock:{
        type:Number,
        default:0
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
   
}, {timestamps:true})

export const Product = mongoose.model("Product", productSchema)