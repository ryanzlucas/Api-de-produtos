const produtoService = require ('../services/service.produto');

class produtoController{
    async verProdutos(req,res){
        const produtos = await produtoService.verProdutosService();
        return res.json(produtos);
    }
    async inserirProduto(req, res) {   
         const novoProduto = await produtoService.inserirProdutoService(req.body);
         return res.json(novoProduto);
}
    async deletarProdutos(req,res){
        const deletarProduto = await produtoService.deletarProdutoService(req.params);
        return res.json(deletarProduto);
    }
    async editarProduto(req,res){
        const editarProduto = await produtoService.editarProdutoService(req.body,req.params);
        return res.json(editarProduto);

    }
  }
module.exports = new produtoController();