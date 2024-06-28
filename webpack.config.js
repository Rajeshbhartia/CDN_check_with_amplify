const devConfig = require('./webpack.dev.js');
const postProdConfig = require('./webpack.config.postBuild.js');
const preProdConfig = require('./webpack.config.preBuild.js');
const TARGET = process.env.npm_lifecycle_event;

module.exports = (env) => {
  if (env.production) {
    if (TARGET === 'preBuild') {
      return preProdConfig;
    }
    if (TARGET === 'postBuild') {
      return postProdConfig;
    }
  }
  return devConfig;
};
