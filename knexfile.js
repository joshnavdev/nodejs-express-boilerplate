// Wrapper for ES6/ES7

require = require('esm')(module);

module.exports = require('./config/knexfile.js').default;
