const express=require('express')
const router=express.Router()
const customerControllers=require('../controllers/customer')
router.get('/',customerControllers.getAllCustomers)
router.get('/:id',customerControllers.getCustomerById)
router.post('/',customerControllers.createCustomer)
router.patch('/:id',customerControllers.updateCustomer)
router.delete('/:id',customerControllers.deleteCustomer)
module.exports=router;


// const express=require('express')
// const router=express.Router()
// const brandController=require('../controllers/brand')
// router.get('/',brandController.getAllBrands)
// router.get('/:id',brandController.getBrandById)
// router.post('/',brandController.createBrand)
// router.patch('/:id',brandController.updateBrand)
// module.exports=router