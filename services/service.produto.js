const produtoModel = require ('../model/produto.model');


class produtoService{
    async verProdutosService(){
        const produtos = await produtoModel.findAll();
        return produtos;
    }
        async inserirProdutoService(data){
            const novoProduto = await produtoModel.create(data);
            return novoProduto;
        }
        async deletarProdutoService(id){
            const deletarProduto = await produtoModel.destroy({where : id});
            return deletarProduto;
        }
        async editarProdutoService(data,id){
            const editarProduto = await produtoModel.update(data,{where : id});
            return editarProduto;
        }
}


module.exports = new produtoService();