const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const rentalSchema = {
    customerId: {
        type: ObjectId,
        required: true
    },
    carId: {
        type: ObjectId,
        required: true
    },
    dateIni: Date,
    dateEnd: Date,
    price: Number
}

const Rental = mongoose.model('Rental', rentalSchema);

module.exports = Rental;