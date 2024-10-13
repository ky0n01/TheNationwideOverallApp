const mongoose = require('mongoose')

const Schema = mongoose.Schema 


const locationSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    barangay: {
        type: String,
        required: true
    },
    psgs_code: {
        type: String,
        required: true
    },
    provid: {
        type: String,
        required: true
    },
    locality: {
        type: String,
        required: true
    },
    province: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    site_type: {
        type: String,
        required: true
    },
    lat: {
        type: String,
        required: true
    },
    long: {
        type: String,
        required: true
    },
}, {timestamps})