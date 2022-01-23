import defineExports from './majorExports/exportExpressRelated';
// let main_router = defineExports().ROUTER;
import productRouting from './controllers/product/product.router';
import paymentMethodRouting from './controllers/payment-method/payment-method.router';

const routers = [
    productRouting,
    paymentMethodRouting
]
export {routers}

