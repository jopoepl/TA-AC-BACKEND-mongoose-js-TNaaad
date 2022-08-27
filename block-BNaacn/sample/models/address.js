var mongoose = require(`mongoose`)

var Schema = mongoose.Schema;


var addressSchema = new Schema({
    village: String,
    city: String,
    state: String,
    pin: Number,
    user: ObjectId
}, {timestamps: true})


module.exports = mongoose.model(`Address`, addressSchema)