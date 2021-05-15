// const { Router } = require('express')
const express = require('express')
const bodyParser = require('body-parser');
const path = require('path')
const publicDirectoryPath = path.join(__dirname, 'views')

const app = express()

const PORT = process.env.PORT || 3005;

const db = require('./models');
console.log(db.Users)


const restaurant = require('./models/restaurant')
const user = require('./models/users')


const users = db.Users.findAll().then(function (user) {
    // console.log(user)
})

app.use(express.urlencoded());

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', publicDirectoryPath)

// main foodie page
app.get('/', async (req, res) => {
    const restaurants=await db.Restaurant.findAll().then(function (restaurant) {
        const dbrestaurant=JSON.stringify(restaurant)
        console.log(dbrestaurant)

        let selectedRestaurant=1

        const chefs=db.Chefs.findAll().then(function (chef) {
            const dbchef=JSON.stringify(chef)


            res.render('home', { restaurant: dbrestaurant, selectedRestaurant, chef: dbchef });
        })
    })

})

// signup page
app.get('/foodie/signup', (req, res) => {
    res.render('foodie/signup')
})

app.post('/foodie/signup', async function (req, res, next) {
    // console.log(req.body)
    const user=await db.Users.create(req.body.users)

    res.redirect('/')


});


// app.get('/foodie:id', async (req, res) => {
// const favorites = await Restaurant.findAll({
//     attributes: ["id"], 
//     where: {liked == TRUE}
// })
// const favoritesJSON = JSON.stringify(favorites))
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
