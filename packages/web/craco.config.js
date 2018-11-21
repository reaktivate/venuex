const fs = require('fs');
const { ESLINT_MODES } = require('@craco/craco');

module.exports = {
  eslint: {
    enable: true,
    mode: ESLINT_MODES.file
  },
  babel: JSON.parse(fs.readFileSync('./.babelrc', 'utf8'))
};
