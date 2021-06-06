const { Op } = require("sequelize");
const express=require('express')
const bodyParser=require('body-parser');
const path=require('path')
const publicDirectoryPath=path.join(__dirname, 'views');
const session = require('express-session');
const _ = require('lodash');
const app=express()

const PORT=process.env.PORT||3005;

const db = require('./models');

app.use(express.urlencoded());
app.use(express.static(__dirname + '/public'));
app.use(session({
    secret: 'some seceret that no one knows',
    resave: false,
    saveUninitialized: true,
    cookie: {}
}));

app.set('view engine', 'ejs');
app.set('views', 'views')
// const prices = {
//     low: '$',
//     med: '$$',
//     high: '$$$'
// }

// main foodie page
app.get('/foodie', async (req, res) => {
    console.log(req.session);
    // req.query;
    // const price = prices[req.query.price];
    let ndx = 0;
    let include = 'chef';
    const userId = req.session.user.id;
    const price = '$$';
    const cuisine = 'Latin';

    if (price && price.length) {
        include = {
            model: db.Chefs,
            as: 'chef',
            where: {
                last_name: price
            }
        }
    }

    const restaurantModels = await db.Restaurant.findAll({ 
        where: {
            cuisine_type: {
                [Op.like]: `%${cuisine}%`
            }
        },
        include: include // 'chef' or {}
    });
    const restaurants = JSON.stringify(restaurantModels);
    console.log(restaurants);
    res.render('foodie', { restaurants, ndx, userId })
})

app.get('/home', (req, res) => {
    res.render('home');
})

// signup page
app.get('/', (req, res) => {
    console.log(req.session);
    res.render('foodie/signup')
})

app.post('/foodie/signup', async function (req, res, next) {
    const { username, first_name, last_name } = req.body.users;

    const user = await db.Users.findOrCreate({
        where: { username },
        defaults: { username, first_name, last_name }
    })

    req.session.user = user[0];

    res.redirect('/home')
});

// add favorites
app.post('/foodie/favorites', async (req, res, next) => {
    const restaurant = _.omit(req.body, ['userId']);
    const favorite = _.assign({}, restaurant, { user_id: req.session.user.id });

    await db.User_restaurant.create(favorite);

    res.send(201);
})

// favorites route
app.get('/foodie/favorites', async (req, res) => {
    const { id } = req.session.user;
    const favorites = await db.User_restaurant.findAll({ 
        where: { 
            user_id: id
        }
    });
    const rest_user = await db.Restaurant.findAll();

    res.render('foodie/index', { faves: favorites, rest: rest_user });
})






const server=app.listen(PORT, () => {

    console.log(`Express is working on port ${PORT}. http://localhost:${PORT}/foodie/signup`);
});


