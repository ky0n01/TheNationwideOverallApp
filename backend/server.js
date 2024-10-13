const express = require('express')
require('dotenv').config()
const siteRoutes = require('./routes/locations')
const mongoose = require('mongoose')


// express app
const app = express() 

// middleware 
app.use(express.json()) //access data sent to server = req

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next() 
})

// this will control the response from every requests
// response to get request or routes
app.use('/api/sites', siteRoutes)

// connect to db 
mongoose.connect(process.env.MONGO_URI)
    .then( () => {
        // listen for requests 
        app.listen(process.env.PORT, () => {
            console.log('Connected to MongoDB')
            console.log('listening on port', process.env.PORT)
        })
    })
    .catch( (err) => {
        console.log("Failed to connect to DB")
    })

