// const expressDependencies = require('./majorExports/exportExpressRelated').defineExports();
import defineExports from './majorExports/exportExpressRelated';
import dotenv from 'dotenv';
import dbConnect from './dbConfig/dbConfig';
import bodyParserInjection from './middlewares/bodyParser';
import cors from 'cors';
import injectCors from './middlewares/corsInjector';

const registerEnv = dotenv.config();
const app = defineExports().APP;
let createServer =  (port: any)=> {
  app.listen(port, ()=> {
	console.log(`Server running at ${process.env.BASE_URL}`);
  });

  dbConnect();  
  injectCors(app);
}

let useRouter =  (...routes: Array<any>) => {
	routes.map((data) => {
    app.use(data);
  });
}
let bodyParserMiddleWare = () => {
  bodyParserInjection();
}

export {
  createServer,
  useRouter,
  bodyParserMiddleWare,
  registerEnv,
}

