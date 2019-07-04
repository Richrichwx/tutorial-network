export const saveTaskToLocal = (pos) => {
  let post = JSON.parse(localStorage.getItem('post'))
  if (post) {
    post = [
      ...post,
      pos
    ]
    console.log(post)
    return localStorage.setItem('post', JSON.stringify(post));
  }

  return localStorage.setItem('post', JSON.stringify([
    post
  ]))
};

export const updateLocalStore = (post) => localStorage.setItem('tasks', JSON.stringify(post));