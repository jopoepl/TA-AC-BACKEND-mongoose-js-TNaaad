var mongoose = require(`mongoose`)

var Schema = mongoose.Schema;


var userSchema = new Schema({
    name: String,
    email: {type: String, lowercase: true},
    age: {type: Number, default: 0},
    password: {type: String, minlength: 5},
    favorites: [String],
    createdAt: {type: Date, default: Date.now()}
}, {timestamps: true})


module.exports = mongoose.model(`User`, userSchema)