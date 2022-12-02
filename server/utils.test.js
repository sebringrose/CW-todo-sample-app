import { sanitizeTodo } from "./utils";

const testGoodTodo = {
  id: 'test-todo-0', 
  text: 'This is a test ToDo', 
  completed: false
};


const testBadTodo = {
  id: 'test-todo-0', 
  text: 'This is a test ToDo', 
  completed: false,
  extraThing: "I shouldn't be here"
};

describe('Test santitizeToo', () => {
  test('It should remove extra properties from object', async () => {
    const sanitized = sanitizeTodo(testBadTodo);
    expect(testGoodTodo).toEqual(sanitized);
  });
});