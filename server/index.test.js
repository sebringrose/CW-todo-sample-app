import request from 'supertest';
import app from './index.js';

describe('Test GET todos', () => {
  test('It should respond 200', async () => {
    const response = await request(app).get('/todos');
    expect(response.statusCode).toBe(200);
  });
});