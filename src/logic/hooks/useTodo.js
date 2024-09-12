import { useEffect, useReducer, useState } from "react";
import { getCookieClient } from "../utils/cookies";
import { todoReducer } from "@/app/todoApp/todoReducer";
import { getTodos } from "@/services/todo/todo";

export const useTodo = () => {

  const token = getCookieClient('auth-token');
  const [todos, dispatch] = useReducer(todoReducer, []);
  // Función para cargar los todos desde el backend
  const loadTodos = async () => {
    try {
      const response = await getTodos(token);
      if (response.ok) {
        dispatch({ type: "[TODO] Load todos", payload: response.todos });
      } else {
        console.error("Failed to fetch todos:", response);
      }
    } catch (error) {
      console.error("An error occurred while fetching todos:", error);
    } 
  };

  useEffect(() => {
    loadTodos();
  }, [token]);

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
