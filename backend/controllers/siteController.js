import Site from '../models/SitesModel.js'
import mongoose from 'mongoose'

// Get ALL sites
const getAllSites = async (req, res) => {
    try {
        const sites = await Site.find()
                                .sort( {nationwide_id: -1} )
        res.status(200).json(sites)
    } catch(err) {
        res.status(400).json( {error: err} )
    }
}

// Get a SINGLE site 
const getSite = async (req, res) => {
    const { id } = req.params
    try { 
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json( {error: `Sorry, but the site you are looking for doesnt exist. Id: ${id}`} )
        }

        const site = await Site.findById(id) 

        res.status(200).json(site)
    } catch(err) {
        res.status(400).json({error: err})
    }
}

// Create NEW site
const createSite = async (req, res) => {
    const {nationwide_id, location, barangay, locality, province, region} = req.body

    // add doc to db
    try {
        const site = await Site.create( {nationwide_id, location, barangay, locality, province, region} )
        res.status(200).json(site)
    } catch(err) {
        res.status(404).json( {error: err} )
    }
}

// Update a site
const updateSite = async (req, res) => {
    const { id } = req.params
    try {

        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json( {error: `Sorry, but the site you are trying to update doesnt exist. Id: ${id}`} )
        }

        const site = await Site.updateOne( {_id: id}, {$set: {key}} )

        // if(!site){
        //     res.status(404).json( {error: 'Site not found.'} )
        // }

        res.status(200).json(site)
    } catch(err) {
        res.status(400).json( {error: err} )
    }
}

// Delete a site
//db.posts.deleteOne({ title: "Post Title 5" })
const deleteSite = async (req, res) => {
    const { id } = req.params

    try {
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json( {error: `Sorry, but the site you are looking for doesnt exist. Id: ${id}`} )
        }

        const site = await Site.deleteOne( {nationwide_id: id} )
    
        if(site.deletedCount){
            return res.status(404).json( { success: `Successfully deleted Site with Id: ${id}`} )
        }
       
        res.status(200).json( {error: `Failed to delete site with ID: ${id}`} )
    } catch(err) {
        res.status(400).json( {error: `Error: ${err}. Unable to delete the Site Id ${id}`} )
    }
}

export {
    getAllSites,
    getSite, 
    createSite,
    updateSite, 
    deleteSite
}