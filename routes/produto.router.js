const {Router} = require ('express')


const controllerProduto = require('../controllers/controller.produto')


const routes = Router()

routes.get("/",controllerProduto.verProdutos);
routes.post("/",controllerProduto.inserirProduto);
routes.delete("/:id",controllerProduto.deletarProduto);
routes.put("/:id",controllerProduto.editarProduto);

module.exports = routes