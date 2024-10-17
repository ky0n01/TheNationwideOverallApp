import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import locationRoutes from './routes/sites.js'

dotenv.config({path: './.env'})
const PORT = process.env.PORT 
const URI = process.env.MONGO_URI

const app = express()
app.use(express.json())

// Middleware. a piece of code that gets executed between a request and response
app.use((req, res, next) => {
    console.log(`Path: ${req.path}`, `Method: ${req.method}`) 
    next() 
}) 

// Location routes
app.use('/api/sites/', locationRoutes)  

// Connnect to database
mongoose.connect(URI)
    .then(() => {
        // listens for requests
        app.listen(PORT, () => {
            console.log('Connected to MONGODB. Now listening on port:', PORT)
        });
    })
    .catch((error) => {
        console.error(error);
    });