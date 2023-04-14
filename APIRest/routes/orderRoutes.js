const express = require('express');

const orderController = require('./../controllers/orderController');

const router = express.Router();

router
    .route('/api/pedido')
    .get(orderController.getAll)
    .post(orderController.createOne);    

router
    .route('/api/pedido/:id')
    .get(orderController.getOne)
    .patch(orderController.updateOne)
    .delete(orderController.deleteOne);
  
module.exports = router;   
