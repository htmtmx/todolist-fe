import { useForm } from "@/logic/hooks/useForm";
import { getCookieClient } from "@/logic/utils/cookies";
import { addTodo } from "@/services/todo/todo";
import { useState } from "react";
import styles from './TodoAdd.module.css';
import Swal from 'sweetalert2';

export const TodoAdd = ({ onNewTodo }) => {

  const { text, onInputChange, onResetForm } = useForm({
    text: '',
  });

  const token = getCookieClient('auth-token');

  // preventDefuault for the form
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (text.length <= 1) return;

    try {
      const response = await addTodo(token, { text });
      if (!response.ok) {
        return Swal.fire('Error', 'No se pudo agregar el todo','error');
      } else {
        Swal.fire('Todo agregado', 'El todo se ha agregado correctamente','success');
      }
      const newTodo = response.todo;
      onNewTodo(newTodo);
      onResetForm();
    } catch (error) {
      console.error('Error adding new todo:', error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.containerForm}>
        <input type="text"
          className={styles.inputForm}
          placeholder="Hacer..."
          name="text"
          value={text}
          onChange={onInputChange}
        />
        <button
          type="submit"
          className={styles.buttonForm}
          onClick={handleSubmit}
        >Agregar</button>
      </form>
    </>
  )
}
