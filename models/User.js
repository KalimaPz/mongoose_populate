let mongoose = require("mongoose")
const {
    Schema
} = mongoose


let UserSchema = new Schema({
    _id: Schema.Types.ObjectId,
    owned_farm: [{
        type: Schema.Types.ObjectId
    }],
    name: String,
    user_id: String,

}, {
    collection: "user"
})

const User = mongoose.model("User", UserSchema)
module.exports = User