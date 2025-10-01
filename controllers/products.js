const productRepository=require('../repositories/products')
async function createProducts(req,res){
    const data=req.body;
    const newProduct=await productRepository.createProduct(data)
    res.status(200).json(newProduct)
}
async function getAllProducts(req,res){
    const products=await productRepository.getAllProducts()
    res.status(200).json(products)
}
async function getProductById(req,res){
    const productId=req.params.id
    const product=await productRepository.getProductById(productId)
    res.status(200).json(product)
}
async function updateProductById(req,res){
    const productId=req.params.id
    const data=req.body
    const product=await productRepository.updateProductById(productId,data)
    res.status(200).json(product)
}
async function deleteProduct(req,res){
    const productId=req.params.id
    const result=await productRepository.deleteProduct(productId)
    res.status(200).json({meaasage:"Deleted Successfully"})
}
module.exports={
    createProducts,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProduct
}