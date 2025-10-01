// const { findById, findByIdAndUpdate } = require('../models/customer');
const {Brand}=require('../models/products')
async function createBrand(brand){
    const newbrand=new Brand({
        name:brand.name
    })
    try{
        const savedBrand= await newbrand.save();
        return savedBrand
    }
   catch(error){
        res.status(400).send("Error:",error.message)
    }
}
async function getAllBrands() {
   try{
     const brands= await Brand.find()
     return brands
   }
    catch{
        res.status(400).json({errormesaage:error})
    }
}
async function getBrandById(id){
        const brand=await Brand.findById(id)
        return brand
}
async function updateBrand(id,data){
 
      try{
         await Brand.findByIdAndUpdate(id,data)
            const newData=await Brand.findById(id);
          return newData
      }
      catch(error){
        res.status(400).json({errormesaage:error})
      }
 
}
async function deleteBrand(id){
   try{
     const result=await Brand.findByIdAndDelete(id)
     return result
   }
   catch{
    res.status(400).json({errormesaage:error})
   }
}
module.exports={
    createBrand,
    getAllBrands,
    getBrandById,
    updateBrand,
    deleteBrand
}