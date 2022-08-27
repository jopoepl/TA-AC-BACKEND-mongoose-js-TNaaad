var express = require(`express`)
var app = express();
var mongoose = require(`mongoose`)

mongoose.connect(`mongodb://127.0.0.1:27017/testing`, (err) => console.log(err ? err: `connected successfully`))



app.listen(4000, () => {
    console.log(`server listening on port 4K`)
})