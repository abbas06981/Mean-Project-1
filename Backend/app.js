const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const categoryRouter = require('./routes/category')
const brandRouter = require('./routes/brand')
const productRouter = require('./routes/product')


const app = express();
const port = 3000;

app.use(express.json())
app.use(cors())

async function connectDB() {
    await mongoose.connect('mongodb://127.0.0.1:27017/', {
        dbName: 'eCommerce_Project1'
    })
}
connectDB().then(() => console.log('Connected to DB')).catch(err => console.log(err))



app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/category', categoryRouter)
app.use('/brand', brandRouter)
app.use('/product', productRouter)

app.listen(port, () => {
    console.log(`Server Running on port ${port}`)
})