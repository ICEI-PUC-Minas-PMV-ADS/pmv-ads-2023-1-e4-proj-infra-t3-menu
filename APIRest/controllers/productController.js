// Produtos - GetById
app.get('/Produtos/:id', (req, res) => {        
    const path = sPATH + 'Products/' + req.params.id; 
    sPORT = PORTA_BACKEND_PRODUTOS;

    httpsRequest(req.headers.authorization, 'GET', path, null, (data, statusCode) => {
        sendResRequestGet(res, data, statusCode);
    });
});

// Produtos - GetAll
app.get('/Produtos', (req, res) => {        
    const path = sPATH + 'Products'; 
    sPORT = PORTA_BACKEND_PRODUTOS;

    httpsRequest(req.headers.authorization, 'GET', path, null, (data, statusCode) => {
        sendResRequestGet(res, data, statusCode);
    });
});

// Produtos - MÉTODO POST
app.post('/Produtos/', (req, res) => {    
    sPORT = PORTA_BACKEND_PRODUTOS;    
    const path = sPATH + 'Products/';
    const bodyData = req.body;

    httpsRequest(req.headers.authorization, 'POST', path, bodyData, (data, statusCode) => {
        sendResRequestPost(res, data, statusCode)
    });
});

// Produtos - MÉTODO PUT
app.put('/Produtos/:id', (req, res) => {
    sPORT = PORTA_BACKEND_PRODUTOS;
    const id = req.params.id;
    const path = sPATH + 'Products/' + id;
    const bodyData = req.body;    

    httpsRequest(req.headers.authorization, 'PUT', path, bodyData, (data, statusCode) => {
        sendResRequestPost(res, data, statusCode)
    });
});


// Produtos - MÉTODO DELETE
app.delete('/Produtos/:id', (req, res) => {
    sPORT = PORTA_BACKEND_PRODUTOS;
    const id = req.params.id;
    const path = sPATH + 'Products/' + id;
    const bodyData = req.body;

    httpsRequest(req.headers.authorization, 'DELETE', path, bodyData, (data, statusCode) => {
        sendResRequestDelete(res, data, statusCode)
    });
});
