var mongoose = require(`mongoose`)

var Schema = mongoose.Schema;

let userSchema = new Schema({
    name: String,
    email: {
        type: String, lowercase: true
    },
    age: {type: Number, default: 0},
    favorite: [String],
    marks: [Number],
    address: {
        village: String,
        city: String,
        state: String,
        pin: Number,
        user: Schema.Types.ObjectId
    }
})