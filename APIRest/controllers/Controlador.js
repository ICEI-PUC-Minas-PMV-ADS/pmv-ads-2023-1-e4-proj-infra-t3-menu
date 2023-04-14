const https = require('https');

const sURL = process.env.DB_HOST;
const sPATH = process.env.DB_PATH;

const defaultOptions = {
    hostname: sURL,
    path: sPATH,    
    //requestCert: false,
    rejectUnauthorized: false,    
    headers: {        
        'Content-Type': 'application/json'                
    }
};

function httpsRequestLogin(porta, path, data, callback) {
    // Cria as opções da requisição HTTPS      
    const options = Object.assign({}, defaultOptions, {
        method: 'POST',
        path,
        rejectUnauthorized: false,
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(JSON.stringify(data)),                
        }, 
        port: porta,       
    })        
 
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

// função genérica para fazer requisições HTTPS com diferentes métodos (GET, POST, PUT, etc.)
function httpsRequest(porta, token, method, path, data, callback) {

    if(token == undefined) {
        callback(null, 401);
        return;
    }

    // Cria as opções da requisição HTTPS      
    const options = Object.assign({}, defaultOptions, {
        method,
        path,
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(JSON.stringify(data)),
            Authorization: token,
        }, 
        port: porta,       
    });              

    // Converte os dados em JSON
    const requestData = JSON.stringify(data);

    // Envia a requisição HTTPS
    const request = https.request(options, (response) => {
        let responseData = '';        

        response.on('data', (chunk) => {
            responseData += chunk;
        });
        // response.on('end', () => {            
        //     let parsedData;
        //     try {
        //         parsedData = JSON.parse(responseData);
        //     } catch (error) {
        //         parsedData = responseData;
        //     }
        //     callback(parsedData, response.statusCode);
        // });
        response.on('end', () => {                       
            let parsedData;
            try {
                parsedData = JSON.parse(responseData);
            } catch (error) {
                parsedData = responseData;
            }
            if (response.statusCode >= 400) {
                const error = new Error(parsedData.detail || 'Erro desconhecido');
                error.statusCode = response.statusCode;
                error.messageError = parsedData.detail || 'Erro desconhecido';             
                callback(error, response.statusCode);
            } else {
                callback(parsedData, response.statusCode);
            }
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
        res.status(404).send(data.messageError);
    } else {
        res.status(statusCode).send('Erro no servidor: '+statusCode);
    }    
}

function sendResRequestPost(res, data, statusCode) {
    if( StatusOk(statusCode)) {
        res.send(data)
    }
    else {        
        res.status(statusCode).send(data.messageError);
    }    
}

function sendResRequestPut(res, data, statusCode) {
    if( StatusOk(statusCode)) {
        res.send(data)
    }
    // else if (statusCode === 400) {
    //   res.status(400).send(data.messageError);    
    // }
    else {        
        res.status(statusCode).send(`Erro ${statusCode} com origem na porta ${sPORT}: `);        
    }    
}

function sendResRequestDelete(res, data, statusCode) {       
    if(statusCode === 200) {            
        res.status(statusCode).send('Registro excluído');
    }
    else if(statusCode === 404) {                    
        res.status(404).send(data.messageError);
    }        
    else
    {
        res.status(statusCode).send('Retorno no sendResRequestDelete'+statusCode);            
    };    
}

// 200 - sucesso
// 201 - created
// 204 - bem sucedido
// 401 - Não autorizado

function StatusOk(statusCode) {
    const allowedStatusCodes = [200, 201, 204];
    return allowedStatusCodes.includes(statusCode);
} 
module.exports = {
    httpsRequest,
    httpsRequestLogin,
    sendResRequestGet,
    sendResRequestPost,
    sendResRequestPut,
    sendResRequestDelete
};
