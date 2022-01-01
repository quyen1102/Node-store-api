

const getAllProduct = async (req, res, next)=>{
    throw new Error('testing async error')
    res.status(200).json({msg: 'Product'})
}



module.exports = {
    getAllProduct,
}