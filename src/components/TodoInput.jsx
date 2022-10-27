import styles from "../scss/components/TodoInput.module.scss";
import { useState } from "react";
import { Check } from "./Check";
import { useContext } from "react";
import { ThemeContext } from "../App";
import clsx from "clsx";

export const TodoInput = ({ sendNewTodo }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [input, setInput] = useState("");

  const themeContext = useContext(ThemeContext);

  const todo_input_container = clsx ({
    [styles.todo_form]: true,
    [styles.todo_form_dark]: (themeContext.theme === 'dark'),
  })  

  const todo_input_text = clsx ({
    [styles.todo_input_text]: true,
    [styles.todo_input_text_dark]: (themeContext.theme === 'dark'),
  })

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
      className={todo_input_container}
      onSubmit={handleSubmit}
    >
      <Check handleCheck={handleCheck} isCompleted={isCompleted} />
      <input
        type="text"
        className={todo_input_text}
        placeholder="Create a new todo..."
        onChange={handleChangeInputText}
        value={input}
      />
    </form>
  );
};