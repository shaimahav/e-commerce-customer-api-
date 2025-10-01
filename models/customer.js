const mongoose=require('mongoose')
const addressSchema=new mongoose.Schema({
    addressline:{
        required:true,
        type:String
    },
    city:{
        required:true,
        type:String
    },
    PIN:{
        required:true,
        type:Number
    }
})
const customerSchema=new mongoose.Schema({
    name:{
        require:true,
        type:String
    },
    place:{
        require:true,
        type:String
    },
    hobbies:{
        type:[String]
    },
    address:addressSchema
})
module.exports=mongoose.model('Customers',customerSchema)