'use strict';

import Router from 'koa-router';
import * as todo from './controllers/todo.js';

const router = new Router();
router.get('/todos', todo.getAll);
router.post('/todos', todo.post);

export default router;
