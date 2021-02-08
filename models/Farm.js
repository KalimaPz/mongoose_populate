let mongoose = require("mongoose")
const {
    collection
} = require("./User")
const {
    Schema
} = mongoose



let FarmSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    owner: String,
    staffs: [String],
    houses: [{
        type: Schema.Types.ObjectId,
        ref : 'House'
    }],
}, {
    collection: "farm"
    
})

const Farm = mongoose.model("Farm", FarmSchema)
module.exports = Farm