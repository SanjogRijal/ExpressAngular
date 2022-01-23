import {PRODUCT} from '../../models/product.schema';

let initialStock = async () => {
	let cokeStock = new PRODUCT({name: 'Coke', price: 20, stock:10});
	let pepsiStock = new PRODUCT({name: 'Pepsi', price: 25, stock:10});
	let dewStock = new PRODUCT({name: 'Dew', price: 30, stock:10});
	await cokeStock.save().then((data:any) => {
		console.log(data);
	});
	await pepsiStock.save().then((data: any) => {
		console.log(data);
	});

	await dewStock.save().then((data: any) => console.log(data));
}

let getAllProducts = async (req: any, res:any) => {
	await PRODUCT.find().then(data => {
		res.json(data);
	}).catch(err => console.log(err));
}

let clearStock = async (req: any, res: any) => {
	await PRODUCT.remove().then(data => {
		res.json(data);
	})
}
export {
    initialStock,getAllProducts, clearStock}
