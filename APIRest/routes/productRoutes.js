const express = require('express');

const productController = require('./../controllers/productController');

const router = express.Router();

router
    .route('/api/produto')
    .get(productController.getAll)    
    .post(productController.createOne);    

router
    .route('/api/produto/getAllCateg/:Categ')    
    .get(productController.getAllCateg);       

router
    .route('/api/produto/:id')
    .get(productController.getOne)
    .put(productController.updateOne)
    .delete(productController.deleteOne);
  
module.exports = router;   
