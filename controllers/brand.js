const brandRepository=require('../repositories/brand')
async function createBrand(req,res){
    const brandData=req.body
    const newBrand= await brandRepository.createBrand(brandData)
    res.status(200).json(newBrand)
} 
async function getAllBrands(req,res) {
    const brands=await brandRepository.getAllBrands()
    res.status(200).json(brands)
}
async function getBrandById(req,res){
    const brandId=req.params.id;
    const brand=await brandRepository.getBrandById(brandId)
    res.status(200).json(brand)
}
async function updateBrand(req,res){
    const brandId=req.params.id
    const data=req.body
    const updatedData=await brandRepository.updateBrand(brandId,data)
    res.status(200).json(updatedData)  
}
async function deleteBrand(req,res){
    const brandId=req.params.id;
    const deletedCustomer=await brandRepository.deleteBrand(brandId)
    res.status(200).json({message:"Deleted Successfully"})
}
module.exports={
    createBrand,
    getAllBrands,
    getBrandById,
    updateBrand,
    deleteBrand
}
