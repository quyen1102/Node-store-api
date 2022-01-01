const productRouter = require('./products')
const siteRouter = require('./site')

const route = (app) => {
    app.use('/api/v1/products',productRouter)
    app.use('/', siteRouter)
}


module.exports = route