const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const carSchema = {
    year: String,
    model: String,
    brand: String,
    dailyPrice: Number,
}

const Car = mongoose.model('Car', carSchema);

module.exports = Car;