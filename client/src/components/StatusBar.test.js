import {render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';

import StatusBar from './StatusBar';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../state/reducers';

const testTodo = {
  id: 'test-todo-0', 
  text: 'This is a test ToDo', 
  completed: false
};

describe('StatusBar component', () => {
  test('Shows "Status: Loaded" by default and "Status: Loading..." on loading state true', async () => {
    // ARRANGE
    const statusBar = <Provider store={createStore(reducers)}><StatusBar /></Provider>
    render(statusBar);

    // INITIAL ASSERT
    expect(screen.getByText('Status: Loaded'));

    // ASSERT LOADING...
    act(() => {
      statusBar.props.store.dispatch({ type: 'LOADING_TRUE' });
    });
    await new Promise(res => setTimeout(res, 100));
    expect(screen.getByText('Status: Loading...'));

    // ASSERT BACK TO LOADED
    act(() => {
      statusBar.props.store.dispatch({ type: 'LOADING_FALSE' });
    });
    await new Promise(res => setTimeout(res, 100));
    expect(screen.getByText('Status: Loaded'));
  })
})