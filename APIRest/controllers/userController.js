require('dotenv').config();
const sPATH = process.env.DB_PATH;
const PORTA_BACKEND_USU      = process.env.PORTA_BACKEND_USU;

var sPORT = PORTA_BACKEND_USU;

const operacoes = require('./Controlador');
const httpsRequest = operacoes.httpsRequest;
const sendResRequestGet = operacoes.sendResRequestGet;
const sendResRequestPost = operacoes.sendResRequestPost;
const sendResRequestPut = operacoes.sendResRequestPut;
const sendResRequestDelete = operacoes.sendResRequestDelete;

// Usuários - GetById
exports.getOne = (req, res) => {
  const path = sPATH + 'Users/' + req.params.id; 
  sPORT = PORTA_BACKEND_USU;   

  httpsRequest(req.headers.authorization, 'GET', path, null, (data, statusCode) => {
      sendResRequestGet(res, data, statusCode);
  });
};

// Usuarios - MÉTODO POST - login
exports.login = (req, res) => { 
    sPORT = PORTA_BACKEND_USU;
    const path = sPATH+'Users/'+'authenticate';
    const bodyData = req.body; 
    
    httpsRequest(req.headers.authorization, 'POST', path, bodyData, (data, statusCode) => {
        sendResRequestPost(res, data, statusCode)
    });        
};

// Usuarios - MÉTODO DELETE
exports.deleteOne = (req, res) => {
    sPORT = PORTA_BACKEND_USU;
    const id = req.params.id;    
    const path = sPATH + 'Users/' + id;
    const bodyData = req.body;

    httpsRequest(req.headers.authorization, 'DELETE', path, bodyData, (data, statusCode) => {        
        sendResRequestDelete(res, data, statusCode)
    });
};

// Usuarios - MÉTODO POST
exports.createOne = (req, res) => {    
    sPORT = PORTA_BACKEND_USU;    
    const path = sPATH + 'Users/Create';
    const bodyData = req.body;        

    httpsRequest(req.headers.authorization, 'POST', path, bodyData, (data, statusCode) => {
        sendResRequestPost(res, data, statusCode)
    });
};

// Usuarios - MÉTODO PUT
exports.updateOne = (req, res) => {    
    sPORT = PORTA_BACKEND_USU;    
    const path = sPATH + 'Users/Put';
    const bodyData = req.body;        

    httpsRequest(req.headers.authorization, 'PUT', path, bodyData, (data, statusCode) => {
        sendResRequestPost(res, data, statusCode)
    });
};



