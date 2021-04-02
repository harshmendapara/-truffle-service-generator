
const serviceGen= require( './index');
module.exports = function (config) {
  const provider = config.provider || "'http://127.0.0.1:8545'"
  const contractsBuildDir = config.contracts_build_directory
  
  serviceGen({contractsBuildDir,provider}).then(()=>console.log('Done!'));
} 