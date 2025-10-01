const orderservice=require('../services/order')
const orderRepositories=require('../repositories/order')
async function createOrder(req,res){
    const data=req.body;
    const order=await orderservice.createOrder(data)
    res.status(200).json(order)
}
async function getAllOrders(req,res){
    const order=await orderRepositories.getAllOrders()
    res.status(200).json(order)
}
async function getOrderById(req,res) 
{
  const orderId=req.params.id
  const order=await orderRepositories.getOrderById(orderId)
  res.status(200).json(order)   
}
async function updateOrderById(req,res)
{
    const orderId=req.params.id
    const data=req.body
        const updatedOrder=await orderservice.updateOrderById(orderId,data)
        res.status(200).json(updatedOrder)
}
async function deleteOrder(req,res)
{
    const orderId=req.params.id
    const result=await orderRepositories.deleteOrder(orderId)
    res.status(200).json({message:"Deleted Successfully"})
}
module.exports={
    createOrder,
    getAllOrders,
    getOrderById,
    updateOrderById,
    deleteOrder
}