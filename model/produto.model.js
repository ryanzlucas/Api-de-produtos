const { log } = require('node:console');
const db = require ('../config/database');

class produtosModel{
    async verProdutos(){    
        const [rows] = await db.query('SELECT * FROM produto');
        console.log(rows);
        return rows;    
    }
    async inserirProduto(produtonome, produtovalor) {
        const [rows] = await db.query('INSERT INTO produto (produtonome, produtovalor) VALUES (?, ?)',[produtonome, produtovalor]);
        return rows;
    }
    async deletarProduto(id){
        const [rows] = await db.query('DELETE FROM produto WHERE idproduto = ?',[id]);
        return rows;
    }
    async editarProduto(id,produtonome,produtovalor){
        const [rows] = await db.query('UPDATE produto SET produtonome = ?, produtovalor = ? WHERE idproduto = ?',[produtonome,produtovalor,id]);
        console.log(rows);
        
        return rows;
    }
}

module.exports = new produtosModel();