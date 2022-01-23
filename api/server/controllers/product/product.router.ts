import {clearStock, getAllProducts ,initialStock} from './product.controller';
import defineExports from '../../majorExports/exportExpressRelated';

var productRouting = defineExports().ROUTER;
const MAIN_ROUTE = "/products";
const INITIAL_STOCK = "/initial-stock";
const GET_ALL = '/getAll';
const CLEAR_STOCK = 'clear-stock';

productRouting.post(`${MAIN_ROUTE}${INITIAL_STOCK}`, () => initialStock());
productRouting.get(`${MAIN_ROUTE}${GET_ALL}`, (req: any, res: any) => getAllProducts(req,res));
productRouting.post(`${MAIN_ROUTE}${CLEAR_STOCK}`, (req: any, res: any)=> clearStock(req, res));

export default productRouting


