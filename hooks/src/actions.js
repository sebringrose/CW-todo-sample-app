export const increment = () => ({
  type: 'INCREMENT'
});

export const decrement = () => ({
  type: 'DECREMENT'
});

export const addTodo = (todo) => ({
  type: 'ADD_TODO',
  text: todo
});

export const removeTodo = (todoId) => ({
  type: 'REMOVE_TODO',
  id: todoId
});

export const completeTodo = (todoId) => ({
  type: 'COMPLETE_TODO',
  id: todoId
});

export const unCompleteTodo = (todoId) => ({
  type: 'UNCOMPLETE_TODO',
  id: todoId
});