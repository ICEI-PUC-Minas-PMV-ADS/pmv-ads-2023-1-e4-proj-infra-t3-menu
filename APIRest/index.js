// Como configurar as rotas:
// https://blog.4linux.com.br/como-organizar-e-manipular-rotas-com-node-js-e-express/

// Vídeo para incluir o swagger nesse projeto:
// https://www.youtube.com/watch?v=WhFx2heoFrA

// Para acessar a documentação swagger dessa API REST, acesse:
// http://localhost:3000/api-docs/

// Documentação oficial da especificação swagger:
// https://swagger.io/specification/

require('dotenv').config();

const https = require('https');
const express = require('express');
const userRouter = require('./routes/userRoutes');

const bodyParser = require('body-parser');

const swaggerUI = require("swagger-ui-express");
const swaggerDocs = require("./swagger.json");

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(userRouter);

// Configurando o Swagger  
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.get('/', (req, res) => {
    return res.json({mensagem: 'Nossa API REST está funcionando'})
    });

app.listen(3000, () => {
    console.log('Servidor escutando na porta 3000');    
});

