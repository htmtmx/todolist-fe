import { useEffect, useReducer } from "react";
import { todoReducer } from "./../../app/todoApp/todoReducer";

export const useTodo = () => {

  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];

  }

  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add todo",
      payload: todo,
    }
    dispatch(action);
  }

  const onToggleTodo = (id) => {
    const action = {
      type: "[TODO] Toggle todo",
      payload: id,
    }
    dispatch(action);
  }

  const onDeleteTodo = (id) => {
    const action = {
      type: "[TODO] Delete todo",
      payload: id,
    }
    dispatch(action);
  }

  return {
    todos,
    onNewTodo,
    onToggleTodo,
    onDeleteTodo,
    allTodos: todos.length,
    completedTodos: todos.filter(todo => todo.status === "completed").length,
    pendingTodos: todos.filter(todo => todo.status === "pending").length,
  }
}
