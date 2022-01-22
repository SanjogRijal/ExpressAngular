// import { ServerResponse } from "http";

let handler = (req: any, res: any) => {
	res.send("Hello World");
}

let newHandler =  (req: any, res: any) => {
	res.send("New Hello World");
} 
module.exports = {
    handler}
