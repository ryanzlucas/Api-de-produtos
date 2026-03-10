const produtoModel = require ('../model/produto.model');


class produtoService{
    async verProdutosService(){
        const produtos = await produtoModel.verProdutos();
        return produtos;
    }
        async inserirProdutoService(produtonome,produtovalor){
            const novoProduto = await produtoModel.inserirProduto(produtonome,produtovalor);
            return novoProduto;
        }
        async deletarProdutoService(id){
            const deletarProduto = await produtoModel.deletarProduto(id);
            return deletarProduto;
        }
        async editarProdutoService(id,produtonome,produtovalor){
            const editarProduto = await produtoModel.editarProduto(id,produtonome,produtovalor);
            return editarProduto;
        }
}


module.exports = new produtoService();