const express = require('express')
const app = express()
require('dotenv').config()

const port = process.env.PORT ||3000

app.use('/', (req, res, next) =>{
    res.json('hello world')
})



const start = async () =>{
    try {
        app.listen(port, console.log(`Server listen on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}
start()