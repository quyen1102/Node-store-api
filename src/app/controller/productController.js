const Product = require('../model/products')

const getAllProductStatic = async (req, res)=>{
    const search = 'albany'
   const products = await Product.find({}).limit(10).skip(2)
   res.status(200).json({nbHits: products.length,products })
}
const getAllProduct = async (req, res) => {
    const { featrued, company, name, sort, fields } =  req.query
    const queryObject = {}
    
    
    if(featrued) {
        queryObject.featrued = featrued === 'true' ? true : false 
    }
    if(company) {
        queryObject.company = company 
    }
    if(name) {
        queryObject.name = { $regex: name, $options: 'i' } 
    }
  
    let result =  Product.find(queryObject)
    // sort
    if(sort) {
        const sortList = sort.split(',').join(' ')
        result = result.sort(sortList)
    }else {
        result = result.sort('createAt')
    }
    // select
    if(fields) {
        const fieldList = fields.split(',').join(' ')
        result = result.select(fieldList)
    }

    const limit = Number(req.query.limit) || 10
    const page = Number(req.query.page) || 1
    const skip = (page - 1) * limit
    result = result.skip(skip).limit(limit)



    const products = await result
    
        
    
   
    res.status(200).json({nbHits: products.length, products })
    
    // console.log(typeof featrued);
      
//    })
    // const string = 'name,-price'
    // const strList = string.split(',').join(' ')
    // console.log(strList);
    
}


module.exports = {
    getAllProduct,
    getAllProductStatic
}