const expressDependencies = require('./majorExports/exportExpressRelated').defineExports();


let createServer =  (port: any)=> {
  
  expressDependencies.APP.listen(port, ()=> {
	console.log(`Server running at http://localhost:${port}`);
  })
  
}

let useRouter =  (routes: any) => {
	
  expressDependencies.APP.use(routes);

}

module.exports = {
  createServer,
  useRouter
}

