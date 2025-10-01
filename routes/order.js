const express=require('express')
const router=express.Router()
const orderController=require('../controllers/order')
router.post('/',orderController.createOrder)
router.get('/',orderController.getAllOrders)
router.get('/:id',orderController.getOrderById)
router.patch('/:id',orderController.updateOrderById)
router.delete('/:id',orderController.deleteOrder)
module.exports=router
