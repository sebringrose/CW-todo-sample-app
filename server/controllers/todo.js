'use strict';

import * as todos from '../models/todo.js';

export const getAll = async ctx => {
  try {
    ctx.body = await todos.find();
  } catch (e) {
    ctx.status = 500;
    console.log(e);
  }
};

export const post = async ctx => {
  try {
    await todos.set(ctx.request.body);
    ctx.body = await todos.findOne(ctx.request.body.id);
    ctx.status = 201;
  } catch (e) {
    ctx.status = 500;
    console.log(e);
  }
};

export const put = async ctx => {
  try {
    if (ctx.request.body.hasOwnProperty('_id')) delete ctx.request.body._id;

    await todos.update(ctx.request.body);
    ctx.body = await todos.findOne(ctx.request.body.id);
  } catch (e) {
    ctx.status = 500;
    console.log(e);
  }
};

export const deleteOne = async ctx => {
  try {
    await todos.deleteOne(ctx.request.body.id);
    ctx.status = 200;
  } catch (e) {
    ctx.status = 500;
    console.log(e);
  }
};

