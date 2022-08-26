var express = require(`express`)
var mongoose = require(`mongoose`)
var app = express()
mongoose.connect(`mongodb://127.0.0.1:27017/testing`, (err) => console.log(err ? err: `connected successfully`))

app.listen(4000, ()=> {
    console.log(`server listening on port 4000`)
})