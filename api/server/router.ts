var expressRouter = require('./majorExports/exportExpressRelated');
let main_router = expressRouter.defineExports().ROUTER;
let productRouter = require('./controllers/product/product.router');
// GET api/status
let routers = {
    productRouter,
}

module.exports = productRouter

