import styles from "../scss/components/TodoInput.module.scss";
import { useState } from "react";
import { Check } from "./Check";

export const TodoInput = ({ sendNewTodo }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      text: input,
      completed: isCompleted
    }
    sendNewTodo(newTodo);

    // reset values
    setInput('');
    setIsCompleted(false);
  }

  const handleChangeInputText = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  }

  const handleCheck = (e) => {
    setIsCompleted(!isCompleted);
  }

  return (
    <form 
      className={styles.todo_form}
      onSubmit={handleSubmit}
    >
      <Check handleCheck={handleCheck} isCompleted={isCompleted} />
      <input
        type="text"
        className={styles.todo_text_input}
        placeholder="Create a new todo..."
        onChange={handleChangeInputText}
        value={input}
      />
    </form>
  );
};