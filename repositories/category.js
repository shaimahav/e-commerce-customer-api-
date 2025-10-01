const {Category}=require('../models/products')
async function createCategory(category){
    const newCategory=new Category({
        name:category.name
    })
   try{
     const savedCategory=await newCategory.save()
     return savedCategory 
   }
   catch{
    res.status(400).json({errorMessage:error.message})
   }
}
async function getAllCategory(req,res){
  try{
    const category=await Category.find()
    return category
  }
   catch(error){
        res.status(400).send("Error:",error.message)
    }
  }
async function getCategoryById(id){
  try{
    const category=await Category.findById(id)
    return category
  }
  catch{
    res.status(400).json({message:error.message})
  }
}
async function updateCategory(id,data){
  try{
    await Category.findByIdAndUpdate(id,data)
    const newCategory=await Category.findById(id)
    return newCategory
  }
  catch{
    res.status(400).json({message:error.message})
  }
}
async function deleteCategory(id){
  try{
    const result=await Category.findByIdAndDelete(id)
    return result
  }
  catch{
    res.status(400).json({message:error.message})
  }
}
module.exports={
  createCategory,
  getAllCategory,
  getCategoryById,
  updateCategory,
  deleteCategory
}