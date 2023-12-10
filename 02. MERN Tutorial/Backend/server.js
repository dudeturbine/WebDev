const express = require('express') // imports the express package
require('dotenv').config()

// Start up express app:
const app = express()

// middleware function
// simple log
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// React to a get request
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the appvwvwfg'})
})

// Listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on PORT')
})

// Simple to  test in terminal with 'node server.js'
// For live running, execute 'nodemon server.js' instead
// Can be viewed in a browser while running, just put localhost:4000 in the search bar