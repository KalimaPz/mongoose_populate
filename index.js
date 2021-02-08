const connectString = `mongodb://cloudfarm:DBcloudfarm@cloudfarm-shard-00-00.a1pfl.mongodb.net:27017,cloudfarm-shard-00-01.a1pfl.mongodb.net:27017,cloudfarm-shard-00-02.a1pfl.mongodb.net:27017/farm?authSource=admin&replicaSet=atlas-okz414-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`
const express = require("express")
const mongoose = require("mongoose")
const route = require('./routes/route')
const cors = require("cors")
const app = express()
const HOST = '0.0.0.0'
const PORT = process.env.PORT || 8080

app.use(cors())
app.use(route)
app.use(express.json())

mongoose.connect(
    connectString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

var db = mongoose.connection
db.on("error", console.error.bind(console, "Failed to Connecting with Mongo Atlas"))
db.once("open", function callback() {
    console.log("Success to Connecting with Mongo Atlas")
})

app.listen(PORT, HOST, () => {
    console.log("Server is running on port :", PORT)
})