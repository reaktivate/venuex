const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@venuex/web': path.resolve(__dirname, './packages/web/src')
    }
  }
};
