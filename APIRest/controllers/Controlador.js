const https = require('https');

const sURL = process.env.DB_HOST;
const sPATH = process.env.DB_PATH;

const defaultOptions = {
    hostname: sURL,
    path: sPATH,    
    rejectUnauthorized: false,    
    headers: {        
        'Content-Type': 'application/json'                
    }
};

// função genérica para fazer requisições HTTPS com diferentes métodos (GET, POST, PUT, etc.)
function httpsRequest(params, data, callback) {
    porta = params.porta;
    token = params.token;
    method = params.method;
    path = params.path;

    // console.log(porta);
    // console.log(token);
    // console.log(method);
    // console.log(path);    
    // console.log(data);
    // console.log('executando httpsRequest');
    // console.log(params);

    let isAuthenticated = params.isAuthenticated !== undefined ? params.isAuthenticated : true;

    if(isAuthenticated && (token === undefined)) {
        const error = new Error('Não autorizado');
        error.statusCode = 401;            
        //console.log('Não consegui passar daqui');      
        //callback(error, error.statusCode);               
        return;
    }

    if(token == undefined)
       token = '';

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
            response.on('end', () => {                       
                let parsedData;
                try {
                    parsedData = JSON.parse(responseData);
                } catch (error) {
                    parsedData = responseData;
                }
                if (response.statusCode >= 400) {
                    const error = new Error(parsedData.detail || response.statusMessage || 'Erro desconhecido');
                    error.statusCode = response.statusCode;
                    error.statusMessage = response.statusMessage;
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

// 200 - sucesso
// 201 - created
// 204 - bem sucedido
// 401 - Não autorizado
function StatusOk(statusCode) {
    const allowedStatusCodes = [200, 201, 204];
    return allowedStatusCodes.includes(statusCode);
} 

function sendResAnyRequest(res, data, statusCode) { 
    if( StatusOk(statusCode)) 
    {
//        console.log('requisição executada com êxito. Retorno da requisição: '+statusCode);
//        console.log(data);
        res.send(data);
    }
    else if ((data !== null) && (data.message !== null))
    {
        // res.status(statusCode).send(data.message);
        // console.log('requisição executada. Retorno da requisição: '+statusCode);
        res.send(data);
    }
    else
    {   
        // Erro emitido por ex quando o servidor de login está desligado e chega uma requisição de login pela api rest     
        res.status(statusCode).send('Erro no servidor: '+statusCode); 
        console.log('Erro no servidor: '+statusCode);
        console.log(data);
    }
}

module.exports = {
    httpsRequest,
    sendResAnyRequest    
};
