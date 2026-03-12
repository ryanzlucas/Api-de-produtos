const {Router} = require ('express')


const controllerProduto = require('../controllers/controller.produto')


const routes = Router()

routes.get("/",controllerProduto.verProdutos);
routes.post("/",controllerProduto.inserirProduto);
routes.delete("/:idproduto",controllerProduto.deletarProdutos);
routes.put("/:idproduto",controllerProduto.editarProduto);

module.exports = routes