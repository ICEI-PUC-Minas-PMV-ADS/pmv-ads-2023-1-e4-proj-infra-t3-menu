// https://blog.4linux.com.br/como-organizar-e-manipular-rotas-com-node-js-e-express/

require('dotenv').config();

const https = require('https');
const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');

const app = express();

app.use(bodyParser.json());

app.get('/Usuario/:id', userController.getOne);
app.post('/Usuario/Create', userController.Create);
app.post('/Login', userController.Login);
app.delete('/Usuario/:id', userController.delete);
app.put('/Usuario', userController.Update);

app.get('/', (req, res) => {
    return res.json({mensagem: 'Nossa API REST está funcionando'})
    });

app.listen(3000, () => {
    console.log('Servidor escutando na porta 3000');    
});

