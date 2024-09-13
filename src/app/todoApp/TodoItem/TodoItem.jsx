import React from "react";
import { SubTaskList } from "../SubTaksList/SubTaskList";
import { CommentList } from "../CommentList/CommentList";
import styles from "./TodoItem.module.css"
import { getCookieClient } from "@/logic/utils/cookies";
import { deleteTodo } from "@/services/todo/todo";
import Swal from "sweetalert2";

export function TodoItem({ todo, onToggleTodo, onDeleteTodo }) {
  
  const token = getCookieClient('auth-token');
  const handleDeleteTodo = async (id) => {
    try {
      const response = await deleteTodo(token, id);
      if (!response.ok) {
        console.error('Error deleting todo:', response);
      } else {
        Swal.fire('Todo eliminado', 'El todo se ha eliminado correctamente','success');
      }
      onDeleteTodo && onDeleteTodo(id);
    } catch (error) {
      console.error('An error occurred while deleting todo:', error);
    }

  }

  return (
    <li className={styles.container}>
        <div className={styles.containerData}>
          <input
            type="checkbox"
            checked={todo.status === "completed"}
            onChange={() => onToggleTodo && onToggleTodo(todo.id)}
          />
          <span
            className={todo.status === 'pending' ? styles.todoItem__pending : todo.status === 'completed' ? styles.todoItem__completed : ''}>
            {todo.text}
          </span>
        </div>
        <div className={styles.containerButtons}>
          <button className={styles.button}>Edit</button>
        <button
          className={styles.button}
            onClick={() => handleDeleteTodo(todo.id)}
            >Delete</button>
        </div>
        <SubTaskList subtasks={todo.subtodos} />
        <CommentList comments={todo.comments} />
    </li>
  );
}