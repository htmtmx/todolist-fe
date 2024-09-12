import { useState } from "react";
import { TodoItem } from "../TodoItem/TodoItem.jsx";
import styles from "./TodoList.module.css"

export function TodoList({ todos, setTasks, onToggleTodo, onDeleteTodo }) {
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") {
      return true;
    } else if (filter === "pending") {
      return todo.status === "pending";
    } else if (filter === "completed") {
      return todo.status === "completed";
    }
    return false;
  });

  return (
    <div>
      <div>
        <button
          onClick={() => handleFilterChange("all")}
          className={`${styles.buttonFilter} 
          ${filter === "all" ? styles.buttonFilter__active : styles.buttonFilter__inactive}`}
        >
          All
        </button>
        <button
          onClick={() => handleFilterChange("pending")}
          className={`${styles.buttonFilter} 
          ${filter === "pending" ? styles.buttonFilter__active : styles.buttonFilter__inactive}`}
        >
          Pending
        </button>
        <button
          onClick={() => handleFilterChange("completed")}
          className={`${styles.buttonFilter} 
          ${filter === "completed" ? styles.buttonFilter__active : styles.buttonFilter__inactive}`}
        >
          Completed
        </button>
      </div>
      <ul>
        {filteredTodos.map((task) => (
          <TodoItem
            key={task.id}
            onToggleTodo={onToggleTodo}
            onDeleteTodo={onDeleteTodo}
            todo={task}
            setTasks={setTasks}
          />
        ))}
      </ul>
    </div>
  );
}