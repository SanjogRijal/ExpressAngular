
const defineExports = () => {
    const EXPRESS = require('express');
    const APP = EXPRESS();
    const ROUTER = EXPRESS.Router();

    const importExpressDependencies = {APP, ROUTER}
    return importExpressDependencies;
};

export default defineExports;

