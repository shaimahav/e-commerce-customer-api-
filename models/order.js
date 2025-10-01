const mongoose=require('mongoose') 
const Customers=require('./customer')
const {Product}=require('./products')
const orderSchema=new mongoose.Schema({
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Customers',
        required:true
    },
    order_date:{
        required:true,
        type:Date,
        default:Date.now
    },
    
    order_items:[{
        product:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product'
        },
        quantity:{
        type:Number,
        required:true
    },
    unit_price:{
        required:true,
        type:Number
    }
    }],
    total:Number,

})
module.exports=mongoose.model('Orders',orderSchema)
