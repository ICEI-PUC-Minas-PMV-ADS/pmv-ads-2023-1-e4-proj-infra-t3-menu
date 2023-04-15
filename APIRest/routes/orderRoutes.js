const express = require('express');

const orderController = require('./../controllers/orderController');

const router = express.Router();

router
    .route('/api/pedido')    
    .post(orderController.createOne);    

router
    .route('/api/pedido/:id')
    .get(orderController.getOne)
    .patch(orderController.updateOne)
    .delete(orderController.deleteOne);

router
     .route('/api/pedido/allByUser/:userId')
     .get(orderController.getAllByUser);    
  
module.exports = router;   
