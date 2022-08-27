var express = require(`express`)
var mongoose = require(`mongoose`)
var app = express()

//importing models
var Article = require(`./models/article`)
var User = require(`./models/user`)
var Comment = require(`./models/comment`)

//middleware

app.use(express.json())

mongoose.connect(`mongodb://localhost/sample`, (err) => {
    console.log(err ? err: "Connected Succesfully")
})



app.listen(4000, () => {
    console.log(`server listening on port 4K`)
})