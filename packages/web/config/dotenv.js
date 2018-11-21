const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development';
}

const env = process.env.NODE_ENV;
const cwd = fs.realpathSync(process.cwd());
const dir = path.resolve(cwd, '.env');

const dotenvFiles = [
  `${dir}.${env}.local`,
  `${dir}.${env}`,
  // Don't include `.env.local` for `test` environment
  // since normally you expect tests to produce the same
  // results for everyone
  env !== 'test' && `${dir}.local`,
  dir
].filter(Boolean);

dotenvFiles.forEach((dotenvFile) => {
  if (fs.existsSync(dotenvFile)) {
    dotenvExpand(dotenv.config({ path: dotenvFile }));
  }
});
