import express from 'express' 
import mongoose from 'mongoose'
import Sites from '../models/SitesModel.js'

const router = express.Router();
 
// GET all Sites
router.get('/', (req, res) => { 
   res.json( {msg: "Get all sites"} )
})

// GET a single Site
router.get('/:id', (req, res) => {
    res.json( {msg: 'Get a single Site'} )
})

// POST a new Site
// Create collection named `nation_cols` 
router.post('/', async (req, res) => {
    const {nationwide_id, location, barangay, locality, province, region} = req.body
    try {
        const site = await Sites.create({nationwide_id, location, barangay, locality, province, region})
        res.status(200).json(site)
    } catch(err) {
        res.status(400).json({error: err.message})
    }
})

// Update a Site
router.patch('/:id', (req, res) => {
    res.json( {msg: 'UPDATE a new Site'} )
})

// DELETE a new Site
router.delete('/:id', (req, res) => {
    res.json( {msg: 'DELETE a Site'} )
})


export default router;