import { type } from "express/lib/response";
import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    product:{
        type:mongoose.Schema.ObjectId,
        ref:"Prduct",
        require:true
    },
    quantity:{
        type:Number,
        require:true
    }
})

const addressSchema = new mongoose.Schema({
    streetNo:{
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
    addressType:{
        type:String,
        enum:['Home','Office']
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice:{
        type : Number,
        require:true
    },
    customer:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        require:true
    },
    orderItem:[orderItemSchema],
    address:[addressSchema],
    status:{
        type:String,
        enum:["PENDING", "CANCELLED", "DELIVERED"],
        default:"PENDING"
    }
},{timestamps:true})

export const Order = mongoose.model("Order", orderSchema)