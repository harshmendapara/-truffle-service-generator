const {
   generateFun
} = require('./generator');
const fse = require('fs-extra');
var path = require("path");


// naive way of thinking is to get the path of the json file and contracts .sol 
//get contract from path 
// if the contrct has address, then it's deployed , if not it's not





const serviceGen = async ({contractsBuildDir, provider} ) => {
  
   const service_path = path.resolve(path.join(contractsBuildDir,'../','../', 'service'));

   const dirFiles = await fse.readdir(contractsBuildDir)
   console.log(`generating web3 functions in ${service_path} for contract artifacts in  ${dirFiles}`);

   if(!await fse.pathExists(service_path)){
      console.log(`creating service folder in  ${service_path}`);

      await fse.mkdirSync(service_path)
   }
   const outputDir =  service_path;
   dirFiles.map(async (file) => {
         console.log(` reading ${contractsBuildDir}/${file} artifacts ...`);
         
      const contract = await readArtifact(`${contractsBuildDir}/${file}`);
    if(contract){  const isDeployed = Object.keys(contract.networks).length === 0 && contract.networks.constructor === Object;
      console.log(` contract ${contractsBuildDir}/${file} migration status is ${isDeployed}`);

      const status = await generateFun(contract, provider, outputDir, contractsBuildDir, !isDeployed);
      console.log(`status ${status}`);}
      else{
        console.error(" invalid files");
        
     }

   })


}


const readArtifact = async (filePath) => {

   const obj = await fse.readJson(filePath, {
      throws: false
   })

   return obj;

}
module.exports = serviceGen

