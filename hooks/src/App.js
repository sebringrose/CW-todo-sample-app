import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement, addTodo, removeTodo, completeTodo, unCompleteTodo } from './actions';

const App = () => {
  const counter = useSelector(state => state.counter);
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const [newTodoText, SetNewToDoText] = useState("");

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button
        onClick={() => dispatch(increment())}
      >
        {' + '}
      </button>
      <button
        onClick={() => dispatch(decrement())}
      >
        {' - '}
      </button>
      <hr />
      <h1>Todos:</h1>
      {
        // Implement the todo list
        todos.filter(todo => !todo.completed).map(todo => <h2 key={todo.id}>
          <span>
            <input 
              type='checkbox' 
              onClick={() => dispatch(completeTodo(todo.id))}
            />
          </span>
          {todo.text}
        </h2>)
      }
      <span>
        <input 
          type="text" 
          value={newTodoText}
          onChange={(e) => SetNewToDoText(e.target.value)} 
        />
        <button onClick={() => {
          dispatch(addTodo(newTodoText))
          SetNewToDoText("")
        }}>Add Todo</button>
      </span>
      <h1>Completed:</h1>
        {todos.filter(todo => todo.completed).map(todo => <h2 key={todo.id}>
          <span>
            <input 
              type='checkbox' 
              defaultChecked
              onClick={() => dispatch(unCompleteTodo(todo.id))}
            />
          </span>
          {todo.text}
          <span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>REMOVE</button>
          </span>
        </h2>)}
    </div>
  );
};

export default App;
