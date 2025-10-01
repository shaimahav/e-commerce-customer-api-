const Orders = require('../models/order');

async function getAllOrders() {
  try {
    const orders = await Orders.find()
      .populate('customer')
      .populate('order_items.product');
    return orders; 
  } catch (error) {
    throw new Error(error.message); 
  }
}
async function getOrderById(id)
{
  try{
    const order=await Orders.findById(id)
    .populate('customer',['name','place'])
      .populate('order_items.product');
    return order
  }
catch(error){
  throw new Error(error.message)
}
}
async function deleteOrder(id)
{
  try{
    const result=await Orders.findByIdAndDelete(id)
    return result
  }
  catch(error) {
    throw new  Error(error.message)
  }
}

module.exports = {
  getAllOrders,
  getOrderById,
  deleteOrder
};
