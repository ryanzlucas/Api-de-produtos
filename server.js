const express = require('express');
const cors = require('cors'); // 1. Importe o pacote cors
const routes = require('./routes/produto.router');
const sequelize = require('./config/database');


const app = express();

app.use(cors()); // 2. Ative o CORS (deve vir antes das rotas)
app.use(express.json());

app.use('/produtos', routes);


async function iniciarServidor() {
  try {
    await sequelize.authenticate();
    console.log("Banco conectado");
    await sequelize.sync({alter: true});
    app.listen(3000, () => {
    console.log('🚀 Servidor rodando em http://localhost:3000');
  });
  } catch (error) {
    console.log('Banco não conectado o erro é:',error);
    
  }
}

iniciarServidor();