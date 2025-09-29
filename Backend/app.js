const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require("dotenv").config();
const { adminMiddleware, authMiddleware } = require("./middleware/authMiddleware")




//=================Routes====================
const categoryRouter = require('./routes/category')
const brandRouter = require('./routes/brand')
const productRouter = require('./routes/product')
const customerRouter = require('./routes/customers')
const authRoutes = require('./routes/auth')


const app = express();
const port = process.env.PORT || 5000;
app.use(express.json())
app.use(cors())

//=================DB Connection====================
async function connectDB() {
    await mongoose.connect(process.env.MONGO_URI)
}
connectDB().then(() => console.log('Connected to DB')).catch(err => console.log(err))



//=================admin Routes path====================

app.use('/category', authMiddleware, adminMiddleware, categoryRouter)
app.use('/brand', authMiddleware, adminMiddleware, brandRouter)
app.use('/product', authMiddleware, adminMiddleware, productRouter)

//=================customer Routes path====================
app.use('/customer', authMiddleware, customerRouter)

// ========== Auth Routes ===========
app.use('/auth', authRoutes)




//=================Server====================
app.listen(port, () => {
    console.log(`Server Running on port ${port}`)
})