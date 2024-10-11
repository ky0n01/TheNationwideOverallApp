import SitesModel from '../models/SitesModel.js'
import Site from '../models/SitesModel.js'

// create new site 
const createSite = async (req, res) => {
    const {nationwide_id, location, barangay, locality, province, region} = req.body

    // add doc to db
    try {
        const site = await SitesModel.create({nationwide_id, location, barangay, locality, province, region})
        res.status(200).json(site)
    } catch(err) {
        res.status(400).json({error: err})
    }
}