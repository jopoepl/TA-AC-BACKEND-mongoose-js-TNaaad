var mongoose = require(`mongoose`)
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {type: String, required: true}, 
    email: String,
    age: {type: Number, default: 0}
})

module.exports = mongoose.model(`User`, userSchema)