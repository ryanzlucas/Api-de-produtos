const express = require('express');
const cors = require('cors'); // 1. Importe o pacote cors
const routes = require('./routes/produto.router');

const app = express();

app.use(cors()); // 2. Ative o CORS (deve vir antes das rotas)
app.use(express.json());

app.use('/produtos', routes);

app.listen(3000, () => {
  console.log('🚀 Servidor rodando em http://localhost:3000');
});
