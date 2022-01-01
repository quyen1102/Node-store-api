

const Home = async (req, res) => {
    res.send('<h1>Wellcome to home page</h1><a href="/api/v1/products">My products here</a>')
}


module.exports = {
    Home,
}