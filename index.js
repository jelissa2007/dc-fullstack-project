
const express=require('express')
const bodyParser=require('body-parser');
const path=require('path')
const publicDirectoryPath=path.join(__dirname, 'views')
const app=express()

const PORT=process.env.PORT||3005;

const db = require('./models');

app.use(express.urlencoded());
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', publicDirectoryPath)
app.use(express.static(__dirname + '/public'));

// main foodie page
app.get('/foodie', async (req, res) => {
    let ndx = 0;
    const userId = 14;
    const restaurantModels = await db.Restaurant.findAll({ include: 'chef' });
    const restaurants = JSON.stringify(restaurantModels);

    res.render('home', { restaurants, ndx, userId })

    // const restaurants=await db.Restaurant.findAll().then(function (restaurant) {

    //     const dbrestaurant=JSON.stringify(restaurant)

    //     let selectedRestaurant=0

    //     const user_id=14

    //     const chefs=db.Chefs.findAll().then(function (chef) {
    //         const dbchef=JSON.stringify(chef)


    //         res.render('home', { restaurant: dbrestaurant, selectedRestaurant, chef: dbchef, user_id: user_id });
    //     })
    // })
})

// signup page
app.get('/', (req, res) => {
    res.render('foodie/signup')
})

app.post('/foodie/signup', async function (req, res, next) {

    const user=await db.Users.create(req.body.users)

    res.redirect('/foodie')


});

// favorites route
app.post('/foodie/favorites', async (req, res, next) => {

    console.log('favorites add', req.body)

    const { user_id, restaurant_id }=req.body

    const favorite=await db.User_restaurant.create({
        user_id, restaurant_id
    });

    res.statusCode



})


app.get('/foodie/favorites', async (req, res) => {
    const favorites=await db.User_restaurant.findAll().then(function (favorite) {
        const dbfavorite=favorite

        const rest_user=db.Restaurant.findAll().then(function (rest) {
            const dbrest_user=rest




            res.render('foodie/index', { faves: dbfavorite, rest: dbrest_user });
        })
    })
})







const server=app.listen(PORT, () => {

    console.log(`Express is working on port ${PORT}. http://localhost:${PORT}`);
});

