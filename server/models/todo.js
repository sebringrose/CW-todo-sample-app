'use strict';

import client from './index.js';
import conf from '../config.js';

const todos = client.db(conf.dbName).collection("todos");

export const find = () => todos.find({}).toArray();
export const set = msg => todos.insertOne(msg);
