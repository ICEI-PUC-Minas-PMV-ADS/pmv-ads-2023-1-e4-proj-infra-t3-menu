require('dotenv').config();
const sPATH = process.env.DB_PATH;
const PORTA_BACKEND_PEDIDOS      = process.env.PORTA_BACKEND_PEDIDOS;

const operacoes = require('./Controlador');
const httpsRequest = operacoes.httpsRequest;
const sendResAnyRequest = operacoes.sendResAnyRequest;

// Pedidos - GetById
exports.getOne = (req, res) => {        
    const path = sPATH + 'Order/' + req.params.id; 

    httpsRequest({
        porta: PORTA_BACKEND_PEDIDOS,
        token: req.headers.authorization,
        method: 'GET',
        path: path
    },
    null, (data, statusCode) => {
        sendResAnyRequest(res, data, statusCode);
    }
   );
};

// Pedidos - getAllByUser
exports.getAllByUser = (req, res) => {            
    const path = sPATH + 'Order/allByUser/' + req.params.userId;

    httpsRequest({
        porta: PORTA_BACKEND_PEDIDOS,
        token: req.headers.authorization,
        method: 'GET',
        path: path
    },
    null, (data, statusCode) => {
        sendResAnyRequest(res, data, statusCode);
    }
   );
};

// Pedidos - getAllOrders
exports.getAllOrders = (req, res) => {            
    const path = sPATH + 'Order/allOrders';
    httpsRequest({
        porta: PORTA_BACKEND_PEDIDOS,
        token: req.headers.authorization,
        method: 'GET',
        path: path
    },
    null, (data, statusCode) => {
        sendResAnyRequest(res, data, statusCode);
    }
   );
};

// Pedidos - MÉTODO POST
exports.createOne = (req, res) => {        
    const path = sPATH + 'Order/';
    const bodyData = req.body;
    httpsRequest({
        porta: PORTA_BACKEND_PEDIDOS,
        token: req.headers.authorization,
        method: 'POST',
        path: path
    },
    bodyData, (data, statusCode) => {
        sendResAnyRequest(res, data, statusCode);
    }
   );    
};

// Pedidos - MÉTODO PUT
exports.updateOne = (req, res) => {    
    const id = req.params.id;
    const path = sPATH + 'Order/' + id;
    const bodyData = req.body;    

    httpsRequest({
        porta: PORTA_BACKEND_PEDIDOS,
        token: req.headers.authorization,
        method: 'PUT',
        path: path
    },
    bodyData, (data, statusCode) => {
        sendResAnyRequest(res, data, statusCode);
    }
   );
};

// Pedidos - MÉTODO PATCH
exports.updateStatusOrder = (req, res) => {    
    const orderId = req.params.orderId;
    let statusOrder = req.params.statusOrder;
    
    statusOrder = statusOrder.replace(' ', '%');

    const path = sPATH + 'Order/updateStatusOrder/' + orderId + '/' +statusOrder;      

    httpsRequest({
        porta: PORTA_BACKEND_PEDIDOS,
        token: req.headers.authorization,
        method: 'PATCH',
        path: path
    },
    null, (data, statusCode) => {
        sendResAnyRequest(res, data, statusCode);
    }
   );
};


// Pedidos - MÉTODO DELETE
exports.deleteOne = (req, res) => {    
    const id = req.params.id;
    const path = sPATH + 'Order/' + id;   

    httpsRequest({
        porta: PORTA_BACKEND_PEDIDOS,
        token: req.headers.authorization,
        method: 'DELETE',
        path: path
    },
    null, (data, statusCode) => {
        sendResAnyRequest(res, data, statusCode);
    }
   );
};

exports.addProductInOrder = (req, res) => {      
    const path = sPATH + 'Order/addProduct/' + req.params.orderId;
    const bodyData = req.body;

    httpsRequest({
        porta: PORTA_BACKEND_PEDIDOS,
        token: req.headers.authorization,
        method: 'POST',
        path: path
    },
    bodyData, (data, statusCode) => {
        sendResAnyRequest(res, data, statusCode);
    }
   );
};

exports.deleteProductFromOrder = (req, res) => {      
    const path = sPATH + 'Order/deleteProduct/' + req.params.orderId + '/' + req.params.productId;
    
    httpsRequest({
        porta: PORTA_BACKEND_PEDIDOS,
        token: req.headers.authorization,
        method: 'DELETE',
        path: path
    },
    null, (data, statusCode) => {
        sendResAnyRequest(res, data, statusCode);
    }
   );
};

