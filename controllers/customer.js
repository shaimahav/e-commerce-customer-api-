const CustomersRepository=require('../repositories/customer');
const CustomerService=require('../services/customer')
async function getAllCustomers(req,res){
    const customers= await CustomerService.getAllActiveCustomers()
     res.status(200).json(customers)
}
async function getCustomerById(req,res){
    const customerId=req.params.id;
    const customer=await CustomersRepository.getCustomerById(customerId)
    res.status(200).json(customer)
}
async function createCustomer(req,res){
    const customerData=req.body;
    const newCustomer= await CustomersRepository.createCustomer(customerData)
    res.status(200).json(newCustomer)
}
async function updateCustomer(req,res){
    const customerId=req.params.id;
    const customerData=req.body;
    const updatedCustomer=await CustomersRepository.updateCustomer(customerId,customerData);
    res.status(200).json(updatedCustomer)
}
async function deleteCustomer(req,res){
    const customerId=req.params.id;
    const deletedCustomer=CustomersRepository.deleteCustomer(customerId)
     res.status(200).json({message:"Deleted successfully"})
}
module.exports={
    getAllCustomers,
    getCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer
}