const categoryRepository=require('../repositories/category')
async function createCategory(req,res){
    const categoryData=req.body
    const newCategory=await categoryRepository.createCategory(categoryData)
    res.status(200).json(newCategory)
}
async function getAllCategory(req,res){
    const category=await categoryRepository.getAllCategory()
    res.status(200).json(category)
}
async function getCategoryById(req,res){
    const id=req.params.id
    const category=await categoryRepository.getCategoryById(id)
    res.status(200).json(category)
}
async function updateCategory(req,res){
    const id=req.params.id
    const data=req.body
    const updatedCategory=await  categoryRepository.updateCategory(id,data)
    res.status(200).json(updatedCategory)
}
async function deleteCategory(req,res){
    const id=req.params.id
    const result=await categoryRepository.deleteCategory(id)
    res.status(200).json({message:"deleted successfully"})
}
module.exports={
    createCategory,
    getAllCategory,
    getCategoryById,
    updateCategory,
    deleteCategory
}