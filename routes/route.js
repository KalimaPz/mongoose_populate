const express = require('express')
const User = require('../models/User')
const Farm = require('../models/Farm')
const House = require('../models/House')
const app = express()

app.get('/getAllUser', async (req, res) => {
    try {
        await User.find({}).then((result) => {
            console.log(result)
            res.json(result)
        })
    } catch (err) {
        next(err)
    }
})

app.get('/getAllFarm', async (req, res) => {
    try {
        await Farm.find({}).then((result) => {
            console.log(result)
            res.json(result)
        })
    } catch (err) {
        next(err)
    }
})

app.get('/getAllHouse', async (req, res) => {
    try {
        await House.find({}).then((result) => {
            console.log(result)
            res.json(result)
        })
    } catch (err) {
        next(err)
    }
})

module.exports = app;