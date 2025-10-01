const {Product}=require('../models/products')
async function createProduct(data){
 const newProduct=new Product({
    title:data.title,
    brand:data.brand,
    category:data.category,
    price:data.price,
    offerPrice:data.offerPrice
 })
 try{
    const savedProduct=await newProduct.save()
    return savedProduct 
 }
 catch{
    res.status(400).send("error:",error.message)
 }
}
async function getAllProducts(req,res){
 try{
     const products=await Product.find().populate(['brand','category'])
  return products
 }
 catch{
    res.status(400).send("error:",error.message)
 }
}
async function getProductById(id){
   try{
      const product=await Product.findById(id)
      return product
   }
   catch(error){
      throw new Error(error.message)
   }
}
async function updateProductById(id,data)
{
   try{
      await Product.findByIdAndUpdate(id,data)
      const updatedProduct=await Product.findById(id)
      return updatedProduct
   }
   catch(error){
      throw new Error(error.messsage)
   }
}
async function deleteProduct(id){
   try{
      const result=await Product.findByIdAndDelete(id)
      return result
   }
   catch(error){
      throw new Error(error.message)
   }
}
module.exports={
    createProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProduct
}