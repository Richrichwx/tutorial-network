let nextTodoId = 0;
export const addPost = (post) => ({
  type: 'ADD_POST',
  id: nextTodoId++,
  post,
});
