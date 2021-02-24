const router = require('express').Router();
const userController = require('../controllers/user');


router.get('/',async (req, res) => {   
    try{
        res.json(await userController.indexAll())
    } catch (error) {
        return res.sendStatus(500).json({
            message: 'Server Error'
        });
    }
});

router.post('/',async (req, res) => {
    try{
        const id = await userController.store(req.body);
        const status = 'success';
        res.json({status,id});
    } catch( error ){   
            return res.status(500).json({
            message: error.message,
            date: new Date
        });
    }
})

router.put('/:id',async (req,res) => {
    try{
        const id = req.params.id;
        res.json(await userController.update(id,req.body));
    } catch( error ){
        return res.sendStatus(500).json({
            message: 'Server Error'
        });
    }
});

router.delete('/:id',async (req, res) => {
   try{
        const id = req.params.id;
        const status = 'deleted'
        await userController.destroy(id);
        res.json({status,id});
   } catch( error ) {
    return res.sendStatus(500).json({
        message: 'Server Error'
    });   
   }

});


router.post('/:id/rent-car',async (req, res) => {
    try{
         const id = req.params.id;
         const car = req.body;
         await userController.rentCar(id,car.id);
         res.json({status,id});
    } catch( error ) {
     return res.sendStatus(500).json({
         message: 'Server Error'
     });   
    }
 });


 router.post('/:id/rental',async (req, res) => {
    try{
         const id = req.params.id;
         const rental = req.body;
         rental.customerId = id;
         await renralController.store(rental);
         res.json({status,id});
    } catch( error ) {
     return res.sendStatus(500).json({
         message: 'Server Error'
     });   
    }
 });


 router.get('/:id/rental',async (req, res) => {
    try{
         const id = req.params.id;
         await rentalController.indexByCustomer(id);
         res.json({status,id});
    } catch( error ) {
     return res.sendStatus(500).json({
         message: 'Server Error'
     });   
    }
 });

 router.get('/:id/rental/:fk',async (req, res) => {
    try{
         const id = req.params.id;
         await rentalController.findOneById(id,fk);
         res.json({status,id});
    } catch( error ) {
     return res.sendStatus(500).json({
         message: 'Server Error'
     });   
    }
 });


module.exports = router;