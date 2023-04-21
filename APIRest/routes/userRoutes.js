const express = require('express');

const userController = require('./../controllers/userController');

const router = express.Router();

router
    .route('/api/usuario')
    //.get(userController.getAll)
    .post(userController.createOne);    

router
    .route('/api/usuario/:id')
    .get(userController.getOne)
    .put(userController.updateOne)
    .delete(userController.deleteOne);

router
    .route('/api/usuario/login')        
    .post(userController.login);    
   
module.exports = router;   


