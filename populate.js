require('dotenv').config()


const connectDB = require('./src/config/db/connect')
const Product = require('./src/app/model/products')

const jsonProduct = require('./product.json')

const start = async () => {
    try {
        await connectDB(process.env.MONGODB)
        await Product.deleteMany()
        await Product.create(jsonProduct)
        console.log('Success');
        process.exit(0)
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}



start()