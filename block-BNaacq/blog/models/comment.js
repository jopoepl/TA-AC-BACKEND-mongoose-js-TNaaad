var mongoose = require(`mongoose`)
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    content: {type: String, required: true}, 
    author: Number,
    article: Number,
}, {timestamps: true})

module.exports = mongoose.model(`Comment`, articleSchema)