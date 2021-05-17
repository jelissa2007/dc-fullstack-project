// const { Router } = require('express')
// const { Router } = require('express')
const express=require('express')
const bodyParser=require('body-parser');
const path=require('path')
const publicDirectoryPath=path.join(__dirname, 'views')
const app=express()

const PORT=process.env.PORT||3005;

const db=require('./models');
console.log(db.Users)


app.use(express.urlencoded());
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', publicDirectoryPath)

// main foodie page
app.get('/', async (req, res) => {

    const restaurants=await db.Restaurant.findAll().then(function (restaurant) {

        const dbrestaurant=JSON.stringify(restaurant)

        let selectedRestaurant=0

        const user_id=14

        const chefs=db.Chefs.findAll().then(function (chef) {
            const dbchef=JSON.stringify(chef)


            res.render('home', { restaurant: dbrestaurant, selectedRestaurant, chef: dbchef, user_id: user_id });
        })
    })

})

// signup page
app.get('/foodie/signup', (req, res) => {
    res.render('foodie/signup')
})

app.post('/foodie/signup', async function (req, res, next) {

    const user=await db.Users.create(req.body.users)

    res.redirect('/')


});

// favorites route
app.post('/foodie/favorites', async (req, res, next) => {

    console.log('favorites add', req.body)

    const { user_id, restaurant_id }=req.body

    const favorite=await db.User_restaurant.create({
        user_id, restaurant_id
    });

    res.send()

})


app.get('/foodie/favorites', async (req, res) => {
    const favorites=await db.User_restaurant.findAll().then(function (favorite) {
        const dbfavorite=JSON.stringify(favorite)

        const rest_user=db.Restaurant.findAll().then(function (rest) {
            const dbrest_user=JSON.stringify(rest)


            res.render('foodie/index', { faves: dbfavorite, rest: dbrest_user });
        })
    })
})






const server=app.listen(PORT, () => {

    console.log(`Express is working on port ${PORT}. http://localhost:${PORT}/foodie/signup`);
});
