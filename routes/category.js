const express=require('express')
const router=express.Router()
const categoryController=require('../controllers/category')
router.get('/',categoryController.getAllCategory)
router.post('/',categoryController.createCategory)
router.get('/:id',categoryController.getCategoryById)
router.patch('/:id',categoryController.updateCategory)
router.delete('/:id',categoryController.deleteCategory)
module.exports=router