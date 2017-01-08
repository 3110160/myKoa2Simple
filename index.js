var register = require('babel-core/register');

register({
    presets: ['es2015-node6','stage-3'],
    plugins: ["transform-runtime"]
});

require('./app.js');