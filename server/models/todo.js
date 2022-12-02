'use strict';

import client from './index.js';
import conf from '../config.js';

import { sanitizeTodo } from '../utils.js';

const todos = client.db(conf.dbName).collection("todos");

export const find = () => todos.find({}).toArray();
export const findOne = (id) => todos.findOne({ id });
export const set = (todo) => todos.insertOne(sanitizeTodo(todo));
export const update = (todo) => todos.updateOne({ id: todo.id }, { $set: sanitizeTodo(todo) });
export const deleteOne = (id) => todos.deleteOne({ id });
