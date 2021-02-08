let mongoose = require("mongoose")
const { collection } = require("./User")
const {
    Schema
} = mongoose


let HouseSchema = new Schema({
    _id: Schema.Types.ObjectId,
    water: {
        main: {
            ec: Number,
            level: Number,
            ph: Number,
            timestamp: String,
        },
        sub_left: {
            ec: Number,
            level: Number,
            ph: Number,
            timestamp: String,
        },
        sub_right: {
            ec: Number,
            level: Number,
            ph: Number,
            timestamp: String,
        },

    },
    environment: {
        data: String,
        in: {
            humd: Number,
            temp: Number,
        },
        out: {
            humd: Number,
            temp: Number,
        },
        lux: Number
    },
},{collection : "house"})

const House = mongoose.model("House", HouseSchema)
module.exports = House