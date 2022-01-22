let indexRouter = require('./server/majorExports/exportExpressRelated');
let registerMainRoute = require('./server/router');
let server = require('./server/server');
let routes = require('./server/router');
server.createServer('8000');
server.useRouter(routes);