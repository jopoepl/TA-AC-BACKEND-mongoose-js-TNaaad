var mongoose = require(`mongoose`)

var Schema = mongoose.Schema

var articleSchema = new Schema({
    title: String,
    genre: String,
    author: Schema.Types.ObjectId
}, {timestamps: true})