import {PAYMENT_METHOD} from '../../models/product.schema';

let initialStock = async (req: any, res:any) => {
	let coinsStock = new PAYMENT_METHOD({methodData: {methodName: 'Cash', stock: 100}});
    let cashStock = new PAYMENT_METHOD({methodData: {methodName: 'Coins', stock: 100}});
	await coinsStock.save().then((data:any) => {
		// console.log(data);
        res.json(data)
	});
	await cashStock.save().then((data: any) => {
		res.json(data);
	});
}

let getAllPaymentMethods = async (req: any, res:any) => {
	await PAYMENT_METHOD.find().then(data => {
		res.json(data);
	}).catch(err => console.log(err));
}

let clearStock = async(req:any, res: any) => {
    await PAYMENT_METHOD.remove({});
}
export {
   initialStock,getAllPaymentMethods, clearStock
}
