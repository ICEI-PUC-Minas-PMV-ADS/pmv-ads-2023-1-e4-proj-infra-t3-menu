const express = require('express');

const orderController = require('./../controllers/orderController');

const router = express.Router();

router
    .route('/api/pedido')    
    .post(orderController.createOne);    

router
    .route('/api/pedido/:id')
    .get(orderController.getOne)
    .put(orderController.updateOne)
    .delete(orderController.deleteOne);

router
     .route('/api/pedido/allByUser/:userId')
     .get(orderController.getAllByUser);   
     
router
     .route('/api/pedido/allOrders')
     .get(orderController.getAllOrders);        

router
     .route('/api/pedido/addProduct/:orderId')
     .post(orderController.addProductInOrder); 
     
router
     .route('/api/pedido/deleteProduct/:orderId/:productId')
     .delete(orderController.deleteProductFromOrder); 
     
router
     .route('/api/pedido/updateStatusOrder/:orderId/:statusOrder')
     .patch(orderController.updateStatusOrder);      
  
module.exports = router;   
