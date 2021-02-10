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
                console.log('mismatch params')
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
        }).populate({
            path: "owned_farm",
            model: Farm,

        }).then((result) => {
            if (result == null) {
                console.log('mismatch params')
                res.json({
                    msg: false,
                    data: null
                })
            } else {
                res.json({
                    msg: true,
                    data: result.owned_farm
                })
            }
        })
    } catch (err) {
        res.status(404)
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
        }).then((result) => {
            if (result == null) {
                console.log('mismatch params')
                res.json({
                    msg: false,
                    data: null
                })
            } else {
                res.json({
                    msg: true,
                    data: owned_house.houses,
                })
            }
        })
    } catch (err) {
        console.log(err)
    }
})

module.exports = app;