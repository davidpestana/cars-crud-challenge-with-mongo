const User = require('../models/user');
const Car = require('../models/car');
const rentalController = require('../controllers/rental');
const bcrypt = require('bcryptjs');
const Rental = require('../models/rental');

class UserController {

    constructor() {
    }

    async indexAll() {
        return User.find().limit(10)
    }

    async store(user) {
        user.password = await bcrypt.hash(user.password, 6);
        return User.create(user);
    }

    async update(id, user) {    
        return User.findByIdAndUpdate(id,user);
    }

    async destroy(id) {
        return User.findByIdAndRemove(id);
    }


    async rentMovie(userId,movieId,range) {
        Rental.create({
            customerId: userId,
            movieId: movieId,
            dateIni: range[0],
            dateEnd:  range[1]
        })
    }


    async indexAllRentalByCustomer(userId) {
        returnRental.find({
            customerId: userId,
        })
    }
}


let userController = new UserController();
module.exports = userController;