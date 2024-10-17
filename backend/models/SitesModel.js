/**
 * Schema for Sites (Blueprint)
 * This schema creates a collection if it doesn't exist in MongoDb
 */
import mongoose from "mongoose"; 

const Schema = mongoose.Schema; 

const NationwideOverallSchema = new Schema({
    nationwide_id: {
        type: Number
    }, 
    location: {
        type: String
    },
    barangay: {
        type: String
    },
    locality: {
        type: String
    },
    province: {
        type: String
    },
    region: {
        type: String
    }
})

                             // name of collection
export default mongoose.model('nation_cols', NationwideOverallSchema)  // creates a collection 
