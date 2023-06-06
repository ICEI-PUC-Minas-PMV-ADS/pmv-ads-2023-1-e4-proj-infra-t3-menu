require('dotenv').config();

const https = require('https');
const express = require('express');
const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');
const orderRouter = require('./routes/orderRoutes');

const bodyParser = require('body-parser');

const swaggerUI = require("swagger-ui-express");
const swaggerDocs = require("./swagger.json");
const cors = require('cors');
const origensPermitidas = process.env.ORIGENS_FRONTEND.split(',');

const app = express();

// Configuração do CORS
const corsOptions = {
    origin: origensPermitidas,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
  };

app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());
app.use(userRouter);
app.use(productRouter);
app.use(orderRouter);

// Configurando o Swagger  
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.get('/', (req, res) => {
    return res.json({mensagem: 'Nossa API REST está funcionando'})
    });

// app.listen(3000, () => {
//     console.log('Servidor escutando na porta 3000');    
// });

app.listen(3000, '0.0.0.0', () => {    
    console.log('Servidor escutando na porta 3000');  
    console.log(origensPermitidas); 
  });
  
  