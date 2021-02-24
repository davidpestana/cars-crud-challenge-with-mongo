const Rental = require('../models/rental');

class RentalController {

    constructor() {
    }

    async indexAll() {
        return Rental.find().limit(10);
    }

    async indexByCustomer(customerId) {
        return Rental.find({customerId:customerId}).limit(10);
    }

    async store(rental) {
        return Rental.create(rental);
    }

    async update(id, rental) {    
        return Rental.findByIdAndUpdate(id,rental);
    }

    async destroy(id) {
        return Rental.findByIdAndRemove(id);
    }



}


let rentalController = new RentalController();
module.exports = rentalController;