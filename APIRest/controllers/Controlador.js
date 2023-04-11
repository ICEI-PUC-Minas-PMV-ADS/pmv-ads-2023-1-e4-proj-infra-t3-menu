const https = require('https');

const sURL = process.env.DB_HOST;
const sPATH = process.env.DB_PATH;

const PORTA_BACKEND_USU      = process.env.PORTA_BACKEND_USU;
const PORTA_BACKEND_PRODUTOS = process.env.PORTA_BACKEND_PRODUTOS;

var sPORT = PORTA_BACKEND_USU;

const defaultOptions = {
    hostname: sURL,
    path: sPATH,
    port: sPORT,
    //requestCert: false,
    rejectUnauthorized: false,    
    headers: {        
        'Content-Type': 'application/json'                
    }
};

// função genérica para fazer requisições HTTPS com diferentes métodos (GET, POST, PUT, etc.)
function httpsRequest(token, method, path, data, callback) {

    // Cria as opções da solicitação HTTPS  
    const options = Object.assign({}, defaultOptions, {
        method,
        path,
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(JSON.stringify(data)),
            //Authorization: token, //jaque: voltar com esse Authorization
        }, 
        port: sPORT,       
    }); 

    // Converte os dados em JSON
    const requestData = JSON.stringify(data);

    // Envia a requisição HTTPS
    const request = https.request(options, (response) => {
        let responseData = '';
        response.on('data', (chunk) => {
            responseData += chunk;
        });
        response.on('end', () => {
            let parsedData;
            try {
                parsedData = JSON.parse(responseData);
            } catch (error) {
                parsedData = responseData;
            }
            callback(parsedData, response.statusCode);
        });
    });

    request.on('error', (error) => {
        console.error(error);
        callback(null, 500);
    });

    if (requestData) {
        request.write(requestData);
    }
    request.end();
}

function sendResRequestGet(res, data, statusCode) {
    if (statusCode === 200) {
        res.send(data);
    } else if (statusCode === 404) {
        res.status(404).send('Código não encontrado');
    } else {
        res.status(statusCode).send('Erro no servidor: '+statusCode);
    }    
}

function sendResRequestPost(res, data, statusCode) {
    if( StatusOk(statusCode)) {
        res.send(data)
    }
    else {
        res.send('Retorno no sendResRequestPost: '+statusCode);
    }    
}

function sendResRequestPut(res, data, statusCode) {
    if( StatusOk(statusCode)) {
        res.send(data)
    }
    else {        
        res.status(statusCode).send(`Erro ${statusCode} com origem na porta ${sPORT}: `);        
    }    
}

function sendResRequestDelete(res, data, statusCode) {       
    if(statusCode === 200) {            
        res.status(statusCode).send('Registro excluído');
    }
    else if(statusCode === 404) {            
        res.status(404).send('Registro não encontrado');
    }        
    else
    {
        res.status(statusCode).send('Retorno no sendResRequestDelete'+statusCode);            
    };    
}

function StatusOk(statusCode) {
    const allowedStatusCodes = [200, 201, 204];
    return allowedStatusCodes.includes(statusCode);
} 
module.exports = {
    httpsRequest,
    sendResRequestGet,
    sendResRequestPost,
    sendResRequestPut,
    sendResRequestDelete
};
