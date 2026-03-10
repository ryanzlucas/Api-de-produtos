const produtoService = require ('../services/service.produto');

class produtoController{
    async verProdutos(req,res){
        const produtos = await produtoService.verProdutosService();
        return res.json(produtos);
    }
    async inserirProduto(req, res) {   
         const { produtonome, produtovalor } = req.body; 
         const novoProduto = await produtoService.inserirProdutoService(produtonome, produtovalor);
         return res.json(novoProduto);
}
    async deletarProduto(req,res){
        const {id} = req.params;
        const deletarProduto = await produtoService.deletarProdutoService(id);
        return res.json(deletarProduto);
    }
    async editarProduto(req,res){
        const {id} = req.params;
        const {produtonome,produtovalor} = req.body;
        const editarProduto = await produtoService.editarProdutoService(id,produtonome,produtovalor);
        return res.json(editarProduto);

    }
  }
module.exports = new produtoController();