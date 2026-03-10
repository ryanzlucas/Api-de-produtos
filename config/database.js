const mysql = require("mysql2/promise"); // 1. O nome deve ser mysql para bater com a linha abaixo

const conexao = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "produtos"
});

// 2. REMOVIDO: conexao(); 
// Um Pool não é uma função que se chama assim. Ele já está pronto após o createPool.

// 3. O 'if' direto no pool sempre será verdadeiro. 
// Para testar a conexão real, usamos um log simples ou uma query de teste.
console.log("Pool de conexões configurado (MySQL)");

module.exports = conexao;
