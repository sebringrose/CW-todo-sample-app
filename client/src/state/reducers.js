import { combineReducers } from 'redux';

const loading = (state = false, action) => {
  switch (action.type) {
    case 'LOADING_TRUE':
      return true;
    case 'LOADING_FALSE':
      return false;
    default: 
      return state;
  }
}

const todos = (
  state = [], action
) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [action.payload, ...state];

    case 'UPDATE_TODO':
      const updateIndex = state.findIndex(todo => todo.id === action.payload.id);
      let updatedTodo = state[updateIndex];
      updatedTodo = action.payload;
      return [ ...state.slice(0,updateIndex), updatedTodo, ...state.slice(updateIndex+1) ];

    case 'REMOVE_TODO':
      const removedIndex = state.findIndex(todo => todo.id === action.payload.id);
      return [ ...state.slice(0,removedIndex), ...state.slice(removedIndex+1) ];

    default:
      return state;
  }
};

export default combineReducers({ loading, todos });
