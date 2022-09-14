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

describe('Test POST todos', () => {
  test('It should respond 201 with added Todo object', async () => {
    const response = await request(app).post('/todos').send(testTodo);

    expect(response.statusCode).toBe(201);
    Object.entries(testTodo).forEach(entry => {
      expect(response.body).toHaveProperty(entry[0], entry[1]);
    });
  });
});

describe('Test PUT todos', () => {
  test('It should respond 200 with updated Todo object', async () => {
    const response = await request(app)
      .put('/todos')
      .send({ ...testTodo, completed: true });

    expect(response.statusCode).toBe(200);
    Object.entries({ ...testTodo, completed: true }).forEach(entry => {
      expect(response.body).toHaveProperty(entry[0], entry[1]);
    });
  });
});

describe('Test DELETE todos', () => {
  test('It should respond 200 with empty object', async () => {
    const response = await request(app)
      .delete('/todos')
      .send({ id: testTodo.id });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({});
  });
});