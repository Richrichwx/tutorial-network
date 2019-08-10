export const required = (value) => {
  if(value) {
    return undefined;
  }
  return 'error';
};

export const maxLengthThunk = (maxLength) => (value) => {
  if(value.length > maxLength) {
    return `max length ${maxLength} simbols`;
  }
  return undefined;
};