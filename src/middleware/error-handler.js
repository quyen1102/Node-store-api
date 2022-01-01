const errorMiddlewareHandler = async (err, req, res, next) => {
    console.log(err)
    return res.status(500).json({msg: 'Some thing went wrong, please try again'})
}

module.exports = errorMiddlewareHandler