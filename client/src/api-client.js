const API = 'http://localhost:4000';

export const getTodos = async () => {
  try {
    const response = await fetch(`${API}/todos`);
    return await response.json();
  } catch (e) {
    console.log(e);
    return [];
  }
}

export const postTodo = async (todo) => {
  try {
    const response = await fetch(`${API}/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    })
    return await response.json();
  } catch (e) {
    console.log(e);
    return todo;
  }
}

export const putTodo = async (todo) => {
  try {
    const response = await fetch(`${API}/todos`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    })
    return await response.json();
  } catch (e) {
    console.log(e);
    return todo;
  }
}

export const deleteTodo = async (todo) => {
  try {
    return await fetch(`${API}/todos`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    })
  } catch (e) {
    console.log(e);
    return null;
  }
}