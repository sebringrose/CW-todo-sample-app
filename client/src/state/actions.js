import { getTodos, postTodo, putTodo, deleteTodo } from '../api-client.js';
import { v4 as uuidv4 } from 'uuid';

export const loadTodos = async (dispatch) => {
  dispatch({ type: 'LOADING_TRUE' });
  const data = await getTodos();
  dispatch({ type: 'LOADING_FALSE' });
  return await Promise.all(data.map(todo => dispatch({
    type: 'ADD_TODO',
    payload: todo
  })));
};

export const addTodo = async (dispatch, todoText) => {
  dispatch({ type: 'LOADING_TRUE' });
  const todo = { id: uuidv4(), text: todoText, completed: false };
  const data = await postTodo(todo);
  dispatch({ type: 'LOADING_FALSE' });
  return dispatch({
    type: 'ADD_TODO',
    payload: data
  });
};

export const completeTodo = async (dispatch, todo) => {
  dispatch({ type: 'LOADING_TRUE' });
  todo.completed = true;
  const data = await putTodo(todo);
  dispatch({ type: 'LOADING_FALSE' });
  return dispatch({
    type: 'UPDATE_TODO',
    payload: data
  });
};

export const unCompleteTodo = async (dispatch, todo) => {
  dispatch({ type: 'LOADING_TRUE' });
  todo.completed = false;
  const data = await putTodo(todo);
  dispatch({ type: 'LOADING_FALSE' });
  return dispatch({
    type: 'UPDATE_TODO',
    payload: data
  });
};

export const removeTodo = async (dispatch, todo) => {
  dispatch({ type: 'LOADING_TRUE' });
  const data = await deleteTodo(todo);
  dispatch({ type: 'LOADING_FALSE' });
  return dispatch({
    type: 'REMOVE_TODO',
    payload: data
  });
};