'use strict';

import todos from '../models/message.js';

export const getAll = async ctx => {
  try {
    ctx.body = await todos.getAll();
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
