const mongoose = require('mongoose')


const connectDB = (url) =>{
    console.log('connect db successfully!!!')
    return mongoose.connect(url)
}

module.exports = connectDB