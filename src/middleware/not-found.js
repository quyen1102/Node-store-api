const notFound = (req, res) =>{
    return res.status(400).send('Route dose not exist');
}
module.exports = notFound