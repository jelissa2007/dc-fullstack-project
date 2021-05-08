const { Router } = require('express')
const express = require('express')
const app = express()
const hostname = '127.0.0.1'
const port = 3005
const path = require('path')
const publicDirectoryPath = path.join(__dirname, 'views')
// const Foodie = require('databasegoeshere')

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', publicDirectoryPath)

app.get('/', (req, res) => {
    res.render('home')
})

app.post('foodie/signup', async (req, res) => {
    var user = {
        first: req.body.first_name,
        last: req.body.last_name,
        username: req.body.username
    }
    res.render('foodie/signup', {
        userValue: user,
        topicHead: 'Sign-Up'
    });
})

// app.get('/foodie:id', async (req, res) => {

//     res.render('foodie/details')
// })

// app.get('/foodie', async (req, res) => {
//     const foodie = await Foodie.find({})
//     res.render('foodie/favorites', { foodie })
// })

app.listen(port, hostname, () => {
    console.log(`Server is up on http://${hostname}:${port} `)
})