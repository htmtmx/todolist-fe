import React from "react";
import { SubTaskList } from "../SubTaksList/SubTaskList";
import { CommentList } from "../CommentList/CommentList";
import styles from "./TodoItem.module.css"

export function TodoItem({ todo, onToggleTodo, onDeleteTodo}) {

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
            onClick={() => onDeleteTodo && onDeleteTodo(todo.id)}
            >Delete</button>
        </div>
        <SubTaskList subtasks={todo.subtodos} />
        <CommentList comments={todo.comments} />
    </li>
  );
}