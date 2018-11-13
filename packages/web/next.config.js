require('dotenv').config();

module.exports = {
  distDir: process.env.NEXT_DIST_DIR || `../.next`,

  useFileSystemPublicRoutes: false,

  // Will only be available on the server side
  serverRuntimeConfig: {},

  // Will be available on both server and client
  publicRuntimeConfig: {
    staticFolder: '/static',
    something: process.env.SOMETHING
  },

  // Customize webpack configuration
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    };

    return config;
  }
};
