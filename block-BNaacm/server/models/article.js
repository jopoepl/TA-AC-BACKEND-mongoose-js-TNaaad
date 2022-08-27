var mongoose = require(`mongoose`)
var Schema = mongoose.Schema

var articleSchema = new Schema({
    title: String,
    genre: String,
    launchdate: Number
})


module.exports = mongoose.model(`Article`, articleSchema)

