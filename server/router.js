'use strict';

import Router from 'koa-router';
import * as todo from './controllers/todo.js';

const router = new Router();
router.get('/todos', todo.getAll);
router.post('/todos', todo.post);
router.put('/todos', todo.put);
router.delete('/todos', todo.deleteOne);

export default router;
