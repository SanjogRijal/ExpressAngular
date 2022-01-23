
import injectCors from './server/middlewares/corsInjector';
import {routers} from './server/router';
import {createServer, useRouter, registerEnv,bodyParserMiddleWare} from './server/server';
import defineExports from './server/majorExports/exportExpressRelated';

    (()=> {
    createServer('8000');
    routers.map((data: any) => {
        useRouter(data);
    });
    bodyParserMiddleWare();
    registerEnv;
})();

