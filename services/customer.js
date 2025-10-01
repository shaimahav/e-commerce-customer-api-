const customerRepository=require('../repositories/customer')
async function getAllActiveCustomers(){
    const customers=customerRepository.getAllCustomers();
    return customers;

}
module.exports={
    getAllActiveCustomers
}