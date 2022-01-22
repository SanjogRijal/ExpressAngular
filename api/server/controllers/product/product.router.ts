var productHandler = require('./product.controller')
var routing = require('../../majorExports/exportExpressRelated').defineExports().ROUTER;

routing.get('/product',(req: any, res: any) => {
    res.send("Data from product");
});

routing.get('/product/newOne',(req: any, res: any) => {
    res.send("Data from new product");
})

module.exports = routing


