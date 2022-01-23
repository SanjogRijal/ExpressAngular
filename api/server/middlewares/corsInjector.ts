import cors from 'cors';


let injectCors = (app: any) => {
    app.use(cors());
}

export default injectCors;