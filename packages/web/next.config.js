require('dotenv').config();

const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withOptimizedImages = require('next-optimized-images');
const withFonts = require('next-fonts');

module.exports = withPlugins([withOptimizedImages, withImages, withFonts], {
  distDir: process.env.NEXT_DIST_DIR || `../.next`,

  useFileSystemPublicRoutes: false,

  // Will only be available on the server side
  serverRuntimeConfig: {},

  // Will be available on both server and client
  publicRuntimeConfig: {
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
});
