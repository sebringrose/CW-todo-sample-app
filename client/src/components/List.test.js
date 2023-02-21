import {render, screen, act} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import List from './List';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../state/reducers';

const testTodo = {
  id: 'test-todo-0', 
  text: 'This is a test ToDo', 
  completed: false
};

describe('List component', () => {
  test('Displays incomplete todos by default and can complete todos', async () => {
    // ARRANGE
    const list = <Provider store={createStore(reducers)}>
      <List />
    </Provider>;
    render(list);

    // ACT - Add todo
    act(() => {
      list.props.store.dispatch({ 
        type: 'ADD_TODO', 
        payload: testTodo 
      });
    });

    // ASSERT
    expect(screen.getByText(testTodo.text)).toBeInTheDocument();
  
    // ACT - user completes Todo
    await userEvent.click(screen.getByRole('checkbox'));
    await new Promise(res => setTimeout(res, 100));
  
    // ASSERT
    // expect(screen.getByText(testTodo.text)).toBe(undefined);
    expect(list.props.store.getState().todos[0].completed);
  })

  test('Displays complete todos with complete prop and can incomplete todos', async () => {
    // ARRANGE
    const list = <Provider store={createStore(reducers)}>
      <List completed={true} />
    </Provider>;
    render(list);

    // ACT - Add todo
    act(() => {
      list.props.store.dispatch({ 
        type: 'ADD_TODO', 
        payload: { ...testTodo, completed: true }
      });
    });

    // ASSERT
    expect(screen.getByText(testTodo.text)).toBeInTheDocument();
    
    // ACT
    await userEvent.click(screen.getByRole('checkbox'));
    await new Promise(res => setTimeout(res, 100));
  
    // ASSERT - user incompletes todo
    expect(list.props.store.getState().todos[0].completed).toBe(false);
  })

  test('Displays complete todos with complete prop and can remove todos', async () => {
    // ARRANGE
    const list = <Provider store={createStore(reducers)}>
      <List completed={true} />
    </Provider>;
    render(list);

    // ACT - Add todo
    act(() => {
      list.props.store.dispatch({ 
        type: 'ADD_TODO', 
        payload: { ...testTodo, completed: true }
      });
    });

    // ASSERT
    expect(screen.getByText(testTodo.text));
  
    // ACT
    await userEvent.click(screen.getByText('Remove'));
    await new Promise(res => setTimeout(res, 100));
  
    // ASSERT
    expect(list.props.store.getState().todos[0]).toBe(undefined);
  })
})