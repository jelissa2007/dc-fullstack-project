// const { Router } = require('express')
const express = require('express')
const bodyParser = require('body-parser');
const path = require('path')
const publicDirectoryPath = path.join(__dirname, 'views')

const app = express()

const PORT = process.env.PORT || 3005;

const db = require('./models');
console.log(db.Users)

const restaurant = require('./models/restaurants')
const user = require('./models/users')

const users = db.Users.findAll().then(function (user) {
    console.log(user)
})

const restaurants = db.Restaurants.findAll().then(function (restaurant) {
    console.log(restaurant)
})

app.use(express.urlencoded());

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', publicDirectoryPath)

app.get('/', (req, res) => {
    res.render('home', {

        locals: {
            users: users
        }

    });

})

app.get('/foodie/signup', (req, res) => {
    res.render('foodie/signup')
})

app.post('/foodie/signup', async function (req, res, next) {
    // console.log(req.body)
    const user = await db.Users.create(req.body.users)

    res.send(JSON.stringify(req.body));

});


// app.get('/foodie:id', async (req, res) => {

//     res.render('foodie/details')
// })

// app.get('/foodie', async (req, res) => {
//     const foodie = await Foodie.find({})
//     res.render('foodie/favorites', { foodie })
// })

// app.listen(port, hostname, () => {
//     console.log(`Server is up on http://${hostname}:${port} `)


// })
const server = app.listen(PORT, () => {

    console.log(`Express is working on port ${PORT}. http://localhost:${PORT}`);
});