/* eslint-disable no-console */

const express = require('express');
const next = require('next');
const router = require('../router');
const { promisify } = require('util');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: 'ui' });
const handler = router.getRequestHandler(app);

async function start() {
  await app.prepare();

  const server = express();

  server.use(handler);

  await Reflect.apply(promisify(server.listen), server, [port]);

  console.log(`> Ready on http://localhost:${port}`);
}

start().catch((err) => {
  console.error(err);

  process.exit(1);
});
