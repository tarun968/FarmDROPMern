const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ProductSchema = new Scehma({
    product:{
        type:ObjectId,
        ref:"Products"
    },
    name:String,
    count:Number,
    price:Number
})
const Orders = new Schema({
    products:[ProductSchema],
    transaction_id:{},
    amount:{type:Number},
    address:String,
    user:{
        type:ObjectId,
        ref:"User"
    },

})
const Order =  mongoose.model("Orders", Orders)
const Cart = mongoose.model("ProductSchema", ProductSchema)
module.exports = {Order,Cart}