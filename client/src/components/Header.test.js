import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Header from './Header';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../state/reducers';

const testTodo = {
  id: 'test-todo-0', 
  text: 'This is a test ToDo', 
  completed: false
};

describe('Header component', () => {
  test('displays heading and can add Todo', async () => {
    // ARRANGE
    const header = <Provider store={createStore(reducers)}><Header /></Provider>;
    render(header);
  
    // ACT
    await userEvent.type(screen.getByLabelText('add todo:'), testTodo.text);
    await userEvent.click(screen.getByText('ADD'));
    await new Promise(res => setTimeout(res, 100));
  
    // ASSERT
    expect(screen.getByText('Testing Todos')).toBeInTheDocument();
    expect(header.props.store.getState().todos[0].text).toEqual(testTodo.text);
  });
});