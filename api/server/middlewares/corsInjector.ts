import cors from 'cors';

let allowedOrigins: Array<string> = ['http://localhost:4200'];
let options: cors.CorsOptions = {
    origin: allowedOrigins
}

let injectCors = (app: any) => {
    app.use(cors(options));
}

export default injectCors;