'use strict';

import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import router from './router.js';

const app = new Koa();

app.use(cors());
app.use(bodyParser());
app.use(router.routes());

export default app;
