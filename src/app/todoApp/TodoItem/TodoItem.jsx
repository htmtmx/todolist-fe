import React from "react";
import { SubTaskList } from "../SubTaksList/SubTaskList";
import { CommentList } from "../CommentList/CommentList";
import styles from "./TodoItem.module.css"

export function TodoItem({ todo, onToggleTodo, onDeleteTodo}) {

  return (
    <li>
      <div>
        <input
          type="checkbox"
          checked={todo.status === "completed"}
          onChange={() => onToggleTodo && onToggleTodo(todo.id)}
        />
        <span
          className={todo.status === 'pending' ? styles.todoItem__pending : todo.status === 'completed' ? styles.todoItem__completed : ''}>
          {todo.text}
        </span>
        <button>Edit</button>
        <button
          onClick={() => onDeleteTodo && onDeleteTodo(todo.id)}
          >Delete</button>
      </div>
      <SubTaskList subtasks={todo.subtasks} />
      <CommentList comments={todo.comments} />
    </li>
  );
}