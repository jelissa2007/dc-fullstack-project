const express = require('express')
const app = express()
const hostname = '127.0.0.1'
const port = 3005
const path = require('path')
const publicDirectoryPath = path.join(__dirname, 'views')
// const Foodie = require('databasegoeshere')

app.set('view engine', 'ejs');
app.set('views', publicDirectoryPath)

app.get('/', (req, res) => {
    res.render('home')
})

// app.get('/foodie', async (req, res) => {
//     const foodie = await Foodie.find({})
//     res.render('foodie/index', { foodie })
// })

// app.get('/foodie:id', async (req, res) => {
//     res.render('foodie/popout')
// })

app.listen(port, hostname, () => {
    console.log(`Server is up on http://${hostname}:${port} `)
})