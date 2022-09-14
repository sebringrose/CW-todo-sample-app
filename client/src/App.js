import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadTodos } from './state/actions.js';

import Header from './components/Header.js';
import List from './components/List.js';
import StatusBar from './components/StatusBar.js';

const App = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    loadTodos(dispatch);
  }, []);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return <div style={{ maxWidth: '800px', margin: 'auto' }}>
    <Header />
    <StatusBar />
    <List />
    <List completed={true} />
  </div>;
};

export default App;
