const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');

dotenvExpand(dotenv.config());

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
    venueId: process.env.VENUE_ID,
    firebase: {
      projectId: process.env.FIREBASE_PROJECT_ID,
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DATABASE_URL,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
    }
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
