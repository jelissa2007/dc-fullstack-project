// const { Router } = require('express')
const express = require('express')
const app = express()
const hostname = '127.0.0.1'
const port = 3005
const path = require('path')
const publicDirectoryPath = path.join(__dirname, 'views')
// const PORT = process.env.PORT || 5000
// const Foodie = require('databasegoeshere')
const bodyParser = require('body-parser');

app.use(express.urlencoded());

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', publicDirectoryPath)

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/foodie/signup', (req, res) => {
    res.render('foodie/signup')
})

app.post('/foodie/signup', function (req, res, next) {
    res.send(JSON.stringify(req.body));
});

app.get('/foodie:id', async (req, res) => {
    res.render('foodie/details')
})

app.get('/foodie', async (req, res) => {
    const foodie = await Foodie.find({})
    res.render('foodie/favorites', { foodie })
})

app.listen(port, hostname, () => {
    console.log(`Server is up on http://${hostname}:${port} `)

})

const server = app.listen(process.env.PORT || 5000, () => {
    const port = server.address().port;
    console.log(`Express is working on port ${port}`);
});
