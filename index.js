var fs     = require('fs')
  , nconf  = require('nconf')
  , _      = require('underscore')
  , config = new nconf.Provider()

module.exports = config;

config
.argv()
.env()

// have to hack NODE_ENV here since we want defaults to take precedence after the file
var configPath = __dirname + '/configs/' + (config.get('NODE_ENV') || 'dev') + '.json'

console.log('Loading configs from ' + configPath);

if (fs.existsSync(configPath)) {
  console.log('Using json from ' + configPath);
  config.file({ file: configPath });
} else {
  console.log('No file at ' + configPath)
}

config.defaults(
  {
    NODE_ENV : 'dev'
  , VERBOSE  : true
  , ROOT_DIR : __dirname
  , PORT     : 3000
  }
);

_.each([ 'ROOT_DIR', 'NODE_ENV', 'PORT', 'MONGO', 'VERBOSE', 'URL_ROOT' ], function(ele) {
  process.stdout.write('  ' + ele + ': ');
  console.log(config.get(ele));
});