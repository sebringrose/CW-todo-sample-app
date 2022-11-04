import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getTodos } from './api-client.js';

import Header from './components/Header.js';
import List from './components/List.js';
import StatusBar from './components/StatusBar.js';

const App = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    (async function() {
      dispatch({ type: 'LOADING_TRUE' });
      const data = await getTodos();
      dispatch({ type: 'LOADING_FALSE' });
      return await Promise.all(data.map(todo => dispatch({
        type: 'ADD_TODO',
        payload: todo
      })));
    })()
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
