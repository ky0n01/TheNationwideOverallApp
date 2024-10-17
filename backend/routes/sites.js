import express from 'express' 
import mongoose from 'mongoose'
import Sites from '../models/SitesModel.js'
import {    
    getAllSites,
    getSite, 
    createSite,
    updateSite, 
    deleteSite
} from '../controllers/siteController.js'

const router = express.Router();
 
// GET all Sites
router.get('/', getAllSites)

// GET a single Site
router.get('/:id', getSite)

// POST a new Site (for test only)
router.post('/', createSite)

// Update a Site
router.patch('/:id', updateSite)

// DELETE a new Site
router.delete('/:id', deleteSite)


export default router;