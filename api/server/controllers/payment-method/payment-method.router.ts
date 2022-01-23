import {clearStock, getAllPaymentMethods,initialStock} from './payment-method.controller';
import defineExports from '../../majorExports/exportExpressRelated';

var paymentMethodRouting = defineExports().ROUTER;

paymentMethodRouting.post('/payment-methods/initial-stock', (req: any,res: any) => initialStock(req, res));
paymentMethodRouting.get('/payment-methods/getAll', (req: any, res: any) => {getAllPaymentMethods(req, res)})
paymentMethodRouting.post('/payment-methods/clear-stock', (req: any, res: any) => {clearStock(req, res)})
export default paymentMethodRouting


