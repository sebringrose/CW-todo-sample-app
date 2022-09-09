'use strict';

import Koa from 'koa';
import serve from 'koa-static';
import bodyParser from 'koa-bodyparser';

import conf from './config.js';
import router from './router.js';

const app = new Koa();

app.use(serve(conf.clientPath));
app.use(bodyParser());
app.use(router.routes());

app.listen(conf.port, () => {
  console.log(`Server listening on port ${conf.port}`)
});
