const express = require('express')
const User = require('../models/User')
const Farm = require('../models/Farm')
const House = require('../models/House')
const app = express()
app.get('/getUserById/:id', (req, res) => {
    let id = req.params.id
    try {
        User.findOne({
            user_id: id
        }).then((result) => {
            if (result == null) {
                res.json({
                    msg: false,
                    data: "Null"
                })
            } else {
                res.json({
                    msg: true,
                    data: result
                })
            }
        })
    } catch (err) {
        console.log(err)
        res.json({
            msg: false
        })
    }
})
app.get('/getFarmByUserId/:user_id', (req, res) => {
    let user_id = req.params.user_id
    try {
        User.findOne({
            user_id: user_id
        }).lean().populate({
            path: "owned_farm",
            model: Farm,

        }).exec((err, farm) => {
            // console.log(err)
            res.json(farm.owned_farm)
        })
    } catch (err) {
        console.log(err)
        res.json({
            msg: false,
            data: "Null"
        })
    }
})

app.get('/getHouseByFarmId/:farm_id', (req, res) => {
    let farm_id = req.params.farm_id
    try {
        Farm.findOne({
            farm_id: farm_id
        }).populate({
            path: "houses",
            model: House
        }).exec((err, owned_house) => {
            res.json(owned_house.houses)
        })
    } catch (err) {
        console.log(err)
    }
})

joinFarmWithOwner = async (username, res) => {
    User.findOne({
            name: username
        })
        .populate({
            path: "owned_farm",
            model: Farm,
            populate: {
                path: "houses",
                select: "house",
                model: House
            }
        }).exec((err, owned_farm) => {
            res.json(owned_farm)
        })
}

module.exports = app;