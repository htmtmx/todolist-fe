'use client'
import { TodoList } from "./todoApp/TodoList/TodoList";
import { TodoAdd } from "./todoApp/TodoAdd/TodoAdd";
import { useTodo } from "@/logic/hooks/useTodo";
import "./main.css";
import { getCookieClient } from "@/logic/utils/cookies";

export default function Home() {
  
  const { todos, onNewTodo, onToggleTodo, onDeleteTodo, allTodos, completedTodos, pendingTodos } = useTodo();

  const token = getCookieClient("auth-token");

  try {
    if (!token) {
      window.location.href = "/auth";
    }
  } catch (error) {
    console.error(error);
  }

  return (
    <>
    {
      token ? (
        <div>
      <main>
        <section>
          <h1>Todo App</h1>
          <div className="container-tasks-count">
            <p>Todos: <span>{allTodos}</span></p>
            <p>Completados: <span>{completedTodos}/{allTodos}</span></p>
            <p>Pendientes: <span>{pendingTodos}</span></p>
          </div>
          <TodoList
            todos={todos}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
        </section>
        <aside>
          <h2>Agregar TODO</h2>
          <TodoAdd
            onNewTodo={onNewTodo}
          />
          
        </aside>
      </main>
      <footer>
      </footer>
    </div>
      ) : null
    }
    </>
  );
}