
    import { initialStock } from './server/controllers/product/product.controller';
import {routers} from './server/router';
    import {createServer, useRouter, registerEnv,bodyParserMiddleWare} from './server/server';

    (()=> {
    createServer('8000');
    routers.map((data: any) => {
        useRouter(data);
    });
    bodyParserMiddleWare();
    registerEnv;
})();

