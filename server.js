const express=require('express')
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const customerRoutes=require('./routes/customer')
const productRoutes=require('./routes/products')
const brandRoutes=require('./routes/brand')
const categoryRoutes=require('./routes/category')
const orderRoutes=require('./routes/order')
const app=express();
dotenv.config({path:"./config/config.env"})
const PORT=process.env.PORT||3000
const DB_CONNT_STRING=process.env.DATABASE_URL
mongoose.connect(DB_CONNT_STRING)
const database=mongoose.connection
database.on('error',(error)=>{
    console.log("DB error=",error)
})
database.once("connected",()=>{
    console.log("Connected successfully")
})

app.use(express.json());
app.use('/api/customers',customerRoutes)
app.use('/api/products',productRoutes)
app.use('/api/brand',brandRoutes)
app.use('/api/category',categoryRoutes)
app.use('/api/order',orderRoutes)
app.listen(PORT,()=>{
    console.log("Listening in the port:",PORT)
})