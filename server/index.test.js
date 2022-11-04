import request from 'supertest';
import app from './index.js';

const testTodo = {
  id: 'test-todo-0', 
  text: 'This is a test ToDo', 
  completed: false
};

describe('Test GET todos', () => {
  test('It should respond 200 with Array', async () => {
    const response = await request(app).get('/todos');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});