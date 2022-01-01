require('dotenv').config()

// asyc error
require('express-async-errors')



const express = require('express')
const app = express()

const route = require('./src/router/index')
const connectDB = require('./src/config/db/connect')
const port = process.env.PORT ||3000
const notFoundMiddleware = require('./src/middleware/not-found')
const errorMiddlewareHandler = require('./src/middleware/error-handler')


//middleware
app.use(express.json())



route(app)

app.use(notFoundMiddleware)
app.use(errorMiddlewareHandler)

const start = async () =>{
    try {
        await connectDB(process.env.MONGODB)
        app.listen(port, console.log(`Server listen on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}
start()