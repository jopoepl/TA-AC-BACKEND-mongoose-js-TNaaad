var express = require(`express`)
var mongoose = require(`mongoose`)


mongoose.connect(`mongodb://localhost/testing`, (err) => console.log(err ? err : `connected to database`))

var app = express();

app.listen(4444, () => {
    console.log(`server listening on port 4444`)
})