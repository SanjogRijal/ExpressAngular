import bodyParser from 'body-parser';
import defineExports from '../majorExports/exportExpressRelated';

let bodyParserInjection = () => {
    defineExports().APP.use(bodyParser.json());
    defineExports().APP.use(bodyParser.urlencoded({ extended: false })
    );
}
export default bodyParserInjection;