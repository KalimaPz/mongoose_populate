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
        type: Schema.Types.ObjectId
    }],
}, {
    collection: "farm"
    
})

const Farm = mongoose.model("Farm", FarmSchema)
module.exports = Farm