import { todoInfoUrls as subtodosInfoUrls } from "./urls";

export const getTodosByTodoID = async (token, todoID) => {
  const response = await fetch(subtodosInfoUrls.getTodosByTodoID, {
    method: 'GET',
    headers: {
      'x-token': token,
      'todoID': todoID,
    }
  });
  return await response.json();
}
 