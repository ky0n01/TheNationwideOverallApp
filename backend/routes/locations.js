const express = require('express')
const router = express.Router() 

// Get all locations
router.get('/', (req, res) => {
    res.json({msg: 'Loading all locations...'})
})

// Get a single location
router.get('/:id', (req, res) => {
    res.json({msg: 'Get single location'}) 
})

// POST a new location 
router.post('/', (req, res) => {
    res.json({msg: 'Post a new location'})
})

// Delete a location
router.delete('/:id', (req, res) => {
    res.json({msg: 'Delete a  location'})
})

// Update a location
router.patch('/:id', (req, res) => {
    res.json({msg: 'Update a  location'})
})

module.exports = router;