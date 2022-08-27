var mongoose = require(`mongoose`)
var date = new Date
var Schema = mongoose.Schema;



let userSchema = new Schema({
    name: String,
    email: {
        type: String, lowercase: true
    },
    age: {type: Number, default: 0},
    password: {type: String, minlength: 5, maxlength: 15},
    createdAt: {type: Date, defaul: date.getDate()}
})


module.exports = mongoose.model(`User`, userSchema)