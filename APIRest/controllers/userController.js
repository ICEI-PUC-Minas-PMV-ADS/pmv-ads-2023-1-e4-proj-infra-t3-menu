require('dotenv').config();
const sPATH = process.env.DB_PATH;
const PORTA_BACKEND_USU      = process.env.PORTA_BACKEND_USU;

const operacoes = require('./Controlador');
const httpsRequest = operacoes.httpsRequest;
const httpsRequestLogin = operacoes.httpsRequestLogin;
const sendResRequestGet = operacoes.sendResRequestGet;
const sendResRequestPost = operacoes.sendResRequestPost;
const sendResRequestPut = operacoes.sendResRequestPut;
const sendResRequestDelete = operacoes.sendResRequestDelete;

// Usuários - GetById
exports.getOne = (req, res) => {
  const path = sPATH + 'Users/' + req.params.id; 

  httpsRequest(PORTA_BACKEND_USU, req.headers.authorization, 'GET', path, null, (data, statusCode) => { 
      sendResRequestGet(res, data, statusCode);
  });
};

// Usuarios - MÉTODO POST - login
exports.login = (req, res) => {     
    const path = sPATH+'Users/'+'authenticate';
    const bodyData = req.body; 
    
    httpsRequestLogin(PORTA_BACKEND_USU, path, bodyData, (data, statusCode) => {
        sendResRequestPost(res, data, statusCode)
    });        
};

// Usuarios - MÉTODO DELETE
exports.deleteOne = (req, res) => {    
    const id = req.params.id;    
    const path = sPATH + 'Users/' + id;
    const bodyData = req.body;

    httpsRequest(PORTA_BACKEND_USU, req.headers.authorization, 'DELETE', path, bodyData, (data, statusCode) => {        
        sendResRequestDelete(res, data, statusCode)
    });
};

// Usuarios - MÉTODO POST
exports.createOne = (req, res) => {        
    const path = sPATH + 'Users/Create';
    const bodyData = req.body;        

    httpsRequest(PORTA_BACKEND_USU, req.headers.authorization, 'POST', path, bodyData, (data, statusCode) => {
        sendResRequestPost(res, data, statusCode)
    });
};

// Usuarios - MÉTODO PUT
exports.updateOne = (req, res) => {        
    const path = sPATH + 'Users/Put';
    const bodyData = req.body;        

    httpsRequest(PORTA_BACKEND_USU, req.headers.authorization, 'PUT', path, bodyData, (data, statusCode) => {
        sendResRequestPut(res, data, statusCode)
    });
};



