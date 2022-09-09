import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadTodos } from './state/actions.js';

import Header from './components/Header.js';
import List from './components/List.js';
import StatusBar from './components/StatusBar.js';

const App = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const [newTodoText, SetNewToDoText] = useState("");

  useEffect(() => {
    loadTodos(dispatch);
  }, []);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return <div style={{ maxWidth: '800px', margin: 'auto' }}>
    <Header />
    <StatusBar />
    <List todos={todos.filter(todo => !todo.completed)} completed={false} />
    <List todos={todos.filter(todo => todo.completed)} completed={true} />
  </div>;
};

export default App;
