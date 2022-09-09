'use strict';

import * as todos from '../models/todo.js';

export const getAll = async ctx => {
  try {
    ctx.body = await todos.find();
  } catch (e) {
    ctx.status = 500;
  }
};

export const post = async ctx => {
  try {
    await todos.set(msg);
    ctx.status = 200;
  } catch (e) {
    ctx.status = 500;
  }
};
