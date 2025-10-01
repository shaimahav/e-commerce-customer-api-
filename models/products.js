const mongoose=require('mongoose')
// const { schema } = require('./customer')
const categorySchema=new mongoose.Schema({
    name:{
        required:true,
        type:String
    }
})
const Category=mongoose.model('Category',categorySchema)
const brandSchema=new mongoose.Schema({
    name:{
        required:true,
        type:String
    }
})
const Brand=mongoose.model('Brand',brandSchema)
const productSchema=new mongoose.Schema({
    title:{
        required:true,
        type:String
    },
    category:{
       type:mongoose.Schema.Types.ObjectId,
       ref:'Category'
    },
    brand:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Brand'
    },
    price:{
        required:true,
        type:Number
    },
    offerPrice:Number
})
const Product=mongoose.model('Product',productSchema)
module.exports={
    Brand,
    Category,
    Product
}