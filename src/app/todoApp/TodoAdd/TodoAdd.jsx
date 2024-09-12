import { useForm } from "@/logic/hooks/useForm";
import { useState } from "react";

export const TodoAdd = ({ onNewTodo }) => {

  const { text, onInputChange, onResetForm } = useForm({
    text: '',
  });

  // preventDefuault for the form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      text,
      status: 'pending',
      subtasks: [],
      comments: [],
    }
    onNewTodo && onNewTodo(newTodo);
    onResetForm();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text"
          placeholder="Hacer..."
          name="text"
          value={text}
          onChange={onInputChange}
        />
        <button
          type="submit"
          onClick={handleSubmit}
        >Agregar</button>
      </form>
    </>
  )
}
