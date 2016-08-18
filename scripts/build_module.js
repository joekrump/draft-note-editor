process.env.NODE_ENV = 'production';


var path = require('path');
var rimrafSync = require('rimraf').sync;
var webpack = require('webpack');
var config = require('../config/webpack.config.build_module');

var isInNodeModules = 'node_modules' ===
  path.basename(path.resolve(path.join(__dirname, '..', '..')));
var relative = isInNodeModules ? '../..' : '.';
rimrafSync(relative + '/dist');

webpack(config).run(function(err, stats) {
  if (err) {
    console.error('Failed to create a module build. Reason:');
    console.error(err.message || err);
    process.exit(1);
  }
});
