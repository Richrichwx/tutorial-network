export const required = (value) => {
  if(value) {
    return undefined;
  }
  return 'error';
};

export const maxLenghtThunk = (maxLength) => (value) => {
  if(value.length > maxLength) {
    return `mmax length ${maxLength} simbols`;
  }
  return undefined;
};