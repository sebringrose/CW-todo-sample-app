'use strict';

import client from './index';
import conf from '../config';

const todos = client.db(conf.dbName).collection("todos");

export const getAll = () => todos.find({}).toArray();
export const set = msg => todos.insertOne(msg);
