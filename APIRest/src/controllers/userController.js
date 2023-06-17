require('dotenv').config();
const sPATH = process.env.DB_PATH;
const PORTA_BACKEND_USU      = process.env.PORTA_BACKEND_USU;

const operacoes = require('./Controlador');
const httpsRequest = operacoes.httpsRequest;
const sendResAnyRequest = operacoes.sendResAnyRequest;

// Usuários - GetById
exports.getOne = (req, res) => {
  const path = sPATH + 'Users/' + req.params.id; 

  httpsRequest({
        porta: PORTA_BACKEND_USU,
        token: req.headers.authorization,
        method: 'GET',
        path: path
    },
    null, (data, statusCode) => {
        sendResAnyRequest(res, data, statusCode);
    }
   );
};

// Usuarios - MÉTODO POST - login
exports.login = (req, res) => {     
    const path = sPATH+'Users/'+'authenticate';
    const bodyData = req.body; 
   
    httpsRequest({
        porta: PORTA_BACKEND_USU,
        method: 'POST',
        path: path,
        isAuthenticated: false
    },
    bodyData, (data, statusCode) => {        
        sendResAnyRequest(res, data, statusCode);
    }
   );
};

// Usuarios - MÉTODO DELETE
exports.deleteOne = (req, res) => {    
    const id = req.params.id;    
    const path = sPATH + 'Users/' + id;    

    httpsRequest({
        porta: PORTA_BACKEND_USU,
        token: req.headers.authorization,
        method: 'DELETE',
        path: path
    },
    null, (data, statusCode) => {
        sendResAnyRequest(res, data, statusCode);
    }
   );

};

// Usuarios - MÉTODO POST
exports.createOne = (req, res) => {        
    const path = sPATH + 'Users/Create';
    const bodyData = req.body;        

    httpsRequest({
        porta: PORTA_BACKEND_USU,
        token: req.headers.authorization,
        method: 'POST',
        path: path,
        isAuthenticated: false
    },
    bodyData, (data, statusCode) => {
        sendResAnyRequest(res, data, statusCode);
    }
   );    
};

// Usuarios - MÉTODO PUT
exports.updateOne = (req, res) => {        
    const path = sPATH + 'Users/Put';
    const bodyData = req.body;        
    
    httpsRequest({
        porta: PORTA_BACKEND_USU,
        token: req.headers.authorization,
        method: 'PUT',
        path: path
    },
    bodyData, (data, statusCode) => {
        sendResAnyRequest(res, data, statusCode);
    }
   );  

};



