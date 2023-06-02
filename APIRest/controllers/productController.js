require('dotenv').config();
const sPATH = process.env.DB_PATH;
const PORTA_BACKEND_PRODUTOS      = process.env.PORTA_BACKEND_PRODUTOS;

const operacoes = require('./Controlador');
const httpsRequest = operacoes.httpsRequest;
const sendResAnyRequest = operacoes.sendResAnyRequest;

// Produtos - GetById
exports.getOne = (req, res) => {        
    const path = sPATH + 'Product/' + req.params.id; 

    httpsRequest({
        porta: PORTA_BACKEND_PRODUTOS,
        token: req.headers.authorization,
        method: 'GET',
        path: path,
        isAuthenticated: false
    },
    null, (data, statusCode) => {
        sendResAnyRequest(res, data, statusCode);
    }
   );
};

// Produtos - GetAllCateg
exports.getAllCateg = (req, res) => {        
    const path = sPATH + 'Product/GetByCategory?Categ=' + req.params.Categ; 

    httpsRequest({
        porta: PORTA_BACKEND_PRODUTOS,
        token: req.headers.authorization,
        method: 'GET',
        path: path,
        isAuthenticated: false
    },
    null, (data, statusCode) => {
        sendResAnyRequest(res, data, statusCode);
    }
   );
};

// Produtos - GetAll
exports.getAll = (req, res) => {        
    const path = sPATH + 'Product'; 
   
    httpsRequest({
        porta: PORTA_BACKEND_PRODUTOS,        
        method: 'GET',
        path: path,
        isAuthenticated: false
    },
    null, (data, statusCode) => {
        sendResAnyRequest(res, data, statusCode);
    }
   );
};

// Produtos - MÉTODO POST
exports.createOne = (req, res) => {        
    const path = sPATH + 'Product/';
    const bodyData = req.body;          

    httpsRequest({
        porta: PORTA_BACKEND_PRODUTOS,
        token: req.headers.authorization,
        method: 'POST',
        path: path
    },
    bodyData, (data, statusCode) => {
        sendResAnyRequest(res, data, statusCode);
    }
   );


};

// Produtos - MÉTODO PUT
exports.updateOne = (req, res) => {    
    const id = req.params.id;
    const path = sPATH + 'Product/' + id;
    const bodyData = req.body;    

    httpsRequest({
        porta: PORTA_BACKEND_PRODUTOS,
        token: req.headers.authorization,
        method: 'PUT',
        path: path
    },
    bodyData, (data, statusCode) => {
        sendResAnyRequest(res, data, statusCode);
    }
   );
};


// Produtos - MÉTODO DELETE
exports.deleteOne = (req, res) => {    
    const id = req.params.id;
    const path = sPATH + 'Product/' + id;

    httpsRequest({
        porta: PORTA_BACKEND_PRODUTOS,
        token: req.headers.authorization,
        method: 'DELETE',
        path: path
    },
    null, (data, statusCode) => {
        sendResAnyRequest(res, data, statusCode);
    }
   );
};
