export const addMessage = () => ({
  type: 'ADD_MESSAGE',
});

export const updateNewMessage = (text) => ({
  type: 'UPDATE_NEW_MESSAGE',
  text
});