const {Product}=require('../models/products')
const Order=require('../models/order');
// const { findByIdAndUpdate } = require('../models/customer');
const customer = require('../models/customer');
async function createOrder(orderData){
  let total=0;
  const totalCalculatedOrder=await Promise.all(orderData.order_items.map(async (item)=>{
    const product=await Product.findById(item.product)
    if(!product) throw new Error(`product not found ${item.product}`);
    total+=item.quantity*product.price;
    return {
      product:product._id,
      quantity:item.quantity,
      unit_price:product.price
    }
  }))
  const order=new Order({
    customer:orderData.customer,
    order_date:orderData.order_date,
    order_items:totalCalculatedOrder,
    total:total

  })
  await order.save()
  return order

}
async function updateOrderById(id,data)
{
  let total=0;
  const updatedItems=await Promise.all(data.order_items.map(async (item)=>{
    const product=await Product.findById(item.product)
    if(!product) throw new Error(`product not found ${item.product}`);
      total+=item.quantity*product.price;
    return {
      product:product._id,
      quantity:item.quantity,
      unit_price:product.price
    }
  }))
  await Order.findByIdAndUpdate(id,{
    customer:data.customer,
    order_items:updatedItems,
    total:total
  })
  const updatedOrder=await Order.findById(id)
  return updatedOrder
}
module.exports={
  createOrder,
    updateOrderById
}
