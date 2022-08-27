var mongoose = require(`mongoose`)
var Schema = mongoose.Schema;


var articleSchema = new Schema({
    title: {type: String, required: true},
    description: String, 
    tags: [String],
    like: {type: Number, default: 0},
    author: Schema.Types.ObjectId,
    comments: Schema.Types.ObjectId
}, {timestamps: true})

module.exports = mongoose.model(`Article`, articleSchema)