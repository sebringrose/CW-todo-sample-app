import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './state/reducers';

const testTodo0 = {
  id: 'test-todo-0', 
  text: 'This is a test ToDo', 
  completed: false
};

const testTodo1 = {
  id: 'test-todo-1', 
  text: 'This is another test ToDo', 
  completed: true
};

describe('App component', () => {
  const app = <Provider store={createStore(reducers)}><App /></Provider>;
  app.props.store.dispatch({ type: 'ADD_TODO', payload: testTodo0 });
  app.props.store.dispatch({ type: 'ADD_TODO', payload: testTodo1 });
  render(app);

  test('renders Header, StatusBar and Lists', async () => {
    expect(screen.getByText('Sample Todo App')).toBeInTheDocument();
    expect(screen.getByText('Status: Loading...')).toBeInTheDocument();
    expect(screen.getByText('This is a test ToDo')).toBeInTheDocument();
    expect(screen.getByText('This is another test ToDo')).toBeInTheDocument();
  })
});