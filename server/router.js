'use strict';

import Router from 'koa-router';
import message from './controllers/todo.js';

const router = new Router();
router.get('/todos', message.getAll);
router.post('/todos', message.post);

export default router;
