const Customer=require('../models/customer')
async function getAllCustomers(){
 const customers=await Customer.find();
 return customers
}
async function getCustomerById(id){
    const customer=await Customer.findById(id);
    return customer;
}
async function createCustomer(customer){
     const newCustomer=new Customer({
        name:customer.name,
        place:customer.place,
        hobbies:customer.hobbies,
        address:customer.address
    })
    try{
    const savedData=await newCustomer.save()
    return savedData;
    }
    catch(error){
        res.status(400).send("Error:",error.message)
    }
}
async function updateCustomer(id,data){
 try{
        await Customer.findByIdAndUpdate(id,data);
        const newData=await Customer.findById(id);
      return newData
    }
    catch{
        res.status(400).json({errormesaage:error})
    }
}
async function deleteCustomer(id){
     try{
        const result=await Customer.findByIdAndDelete(id);
       return(result)
    }
    catch{
        res.status(500).json({error:error.mesaage})
    }

}
module.exports={
    getAllCustomers,
    getCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer
}