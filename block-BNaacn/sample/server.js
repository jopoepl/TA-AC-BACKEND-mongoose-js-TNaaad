var express = require(`express`)
var mongoose = require(`mongoose`)
var app = express()

mongoose.connect(`mongodb://localhost/sample`, (err) => {
    console.log(err ? err: "Connected Succesfully")
})

app.listen(4000, () => {
    console.log(`server listening on port 4K`)
})