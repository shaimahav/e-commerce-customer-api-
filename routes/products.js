const express=require('express')
const router=express.Router()
const productController=require('../controllers/products')
router.get('/',productController.getAllProducts)
router.post('/',productController.createProducts)
router.get('/:id',productController.getProductById)
router.patch('/:id',productController.updateProductById)
router.delete('/:id',productController.deleteProduct)
module.exports=router;