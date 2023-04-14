require('dotenv').config();
const sPATH = process.env.DB_PATH;
const PORTA_BACKEND_PEDIDOS      = process.env.PORTA_BACKEND_PEDIDOS;

const operacoes = require('./Controlador');
const httpsRequest = operacoes.httpsRequest;
const sendResRequestGet = operacoes.sendResRequestGet;
const sendResRequestPost = operacoes.sendResRequestPost;
const sendResRequestPut = operacoes.sendResRequestPut;
const sendResRequestDelete = operacoes.sendResRequestDelete;

// Pedidos - GetById
exports.getOne = (req, res) => {        
    const path = sPATH + 'Order/' + req.params.id; 

    httpsRequest(PORTA_BACKEND_PEDIDOS, req.headers.authorization, 'GET', path, null, (data, statusCode) => {
        sendResRequestGet(res, data, statusCode);
    });
};

// Pedidos - GetAll
exports.getAll = (req, res) => {        
    const path = sPATH + 'Order'; 

    httpsRequest(PORTA_BACKEND_PEDIDOS, req.headers.authorization, 'GET', path, null, (data, statusCode) => {
        sendResRequestGet(res, data, statusCode);
    });
};

// Pedidos - MÉTODO POST
exports.createOne = (req, res) => {        
    const path = sPATH + 'Order/';
    const bodyData = req.body;

    httpsRequest(PORTA_BACKEND_PEDIDOS, req.headers.authorization, 'POST', path, bodyData, (data, statusCode) => {
        sendResRequestPost(res, data, statusCode)
    });
};

// Pedidos - MÉTODO PUT
exports.updateOne = (req, res) => {    
    const id = req.params.id;
    const path = sPATH + 'Order/' + id;
    const bodyData = req.body;    

    httpsRequest(PORTA_BACKEND_PEDIDOS, req.headers.authorization, 'PUT', path, bodyData, (data, statusCode) => {
        sendResRequestPut(res, data, statusCode)
    });
};


// Pedidos - MÉTODO DELETE
exports.deleteOne = (req, res) => {    
    const id = req.params.id;
    const path = sPATH + 'Order/' + id;
    const bodyData = req.body;

    httpsRequest(PORTA_BACKEND_PEDIDOS, req.headers.authorization, 'DELETE', path, bodyData, (data, statusCode) => {
        sendResRequestDelete(res, data, statusCode)
    });
};
