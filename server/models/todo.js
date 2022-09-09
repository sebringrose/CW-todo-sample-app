'use strict';

import client from './index.js';
import conf from '../config.js';

const todos = client.db(conf.dbName).collection("todos");

export const find = () => todos.find({}).toArray();
export const findOne = (id) => todos.findOne({ id });
export const set = (todo) => todos.insertOne(todo);
export const update = (todo) => todos.updateOne({ id: todo.id }, { $set: todo });
export const deleteOne = (id) => todos.deleteOne({ id });
