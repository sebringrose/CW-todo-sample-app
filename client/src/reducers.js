import { combineReducers } from 'redux';

const counter = (/*state = …What's the default state of counter?…, action*/
  state = 0, action
) => {
  switch (action.type) {
    case 'INCREMENT':
      return state+1;
    case 'DECREMENT':
      return state > 0 
        ? state-1
        : state;
    default:
      return state;
  }
};

let nextId = 0;
const todos = (/* Something is missing …*/
  state = [], action
) => {
  // Remember to increase nextId every time you create a new action
  switch (action.type) {
    case 'ADD_TODO':
      const id = nextId;
      nextId++;
      return [{ id, text: action.text, completed: false }, ...state];

    case 'REMOVE_TODO':
      const removedIndex = state.findIndex(todo => todo.id === action.id);
      return [ ...state.slice(0,removedIndex), ...state.slice(removedIndex+1) ];

    case 'COMPLETE_TODO':
      const completedIndex = state.findIndex(todo => todo.id === action.id);
      const completedTodo = state[completedIndex];
      completedTodo.completed = true;

      return [ ...state.slice(0,completedIndex), completedTodo, ...state.slice(completedIndex+1) ];

    case 'UNCOMPLETE_TODO':
      const uncompletedIndex = state.findIndex(todo => todo.id === action.id);
      const uncompletedTodo = state[uncompletedIndex];
      uncompletedTodo.completed = false;

      return [ ...state.slice(0,uncompletedIndex), uncompletedTodo, ...state.slice(uncompletedIndex+1) ];

    default:
      return state;
  }
};

// Combining both reducers
const reducers = combineReducers({
  counter,
  todos,
});

export default reducers;
