export const sanitizeTodo = (todo) => {
  const { id, text, completed } = todo;
  return { id, text, completed }
}