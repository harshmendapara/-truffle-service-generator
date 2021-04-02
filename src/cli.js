const arg = require ('arg');
const path = require("path");

const serviceGen= require( './index');

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {
      '--help': Boolean,
      '--dir': String,
      '--provider': String,
      '-d': '--dir',
      '-p': '--provider',
      '-h': '--help',
       
    },
    {
      argv: rawArgs.slice(2),
    }
  );
  return {
    contractsBuildDir: args['--dir'] || 'build/contracts',
    provider: args['--provider'] || "'http://127.0.0.1:8545'",
    help: args._[0]|| args['--help'],
  
  };
}

export async function cli(args) {
 
  let options = parseArgumentsIntoOptions(args);
  options.contractsBuildDir= path.resolve(path.join(process.cwd(), options.contractsBuildDir))
  await serviceGen(options);
}

// ...
