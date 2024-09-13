import { todoInfoUrls } from "./urls";

export const getTodos = async (token) => {
  const response = await fetch(todoInfoUrls.getTodos, {
    method: 'GET',
    headers: {
      'x-token': token,
    }
  });
  return await response.json();
}

export const addTodo = async (token, todo) => {
  const response = await fetch(todoInfoUrls.addTodo, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
      'x-token': token,
    },
    body: JSON.stringify(todo),
  });
  const data = await response.json();
  return data;
}

export const deleteTodo = async (token, id) => {
  const response = await fetch(`${todoInfoUrls.deleteTodo}/${id}`
    , {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'x-token': token,
      },
  });
  return await response.json();
}