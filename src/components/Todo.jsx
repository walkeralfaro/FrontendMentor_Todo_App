import styles from "../scss/components/Todo.module.scss";
import { Check } from "./Check";
import clsx from 'clsx';
import { useContext } from "react";
import { ThemeContext } from "../App";

export const Todo = ({ id, text, changeStateTodo, deleteTodo, completed, innerRef, draggableProvided  }) => {

  const themeContext = useContext(ThemeContext);

  const todo_container = clsx({
    [styles.todo_container_light]: true,
    [styles.todo_container_dark]: (themeContext.theme === 'dark'),
  })

  const textStyles = clsx({
    [styles.todo_text]: true,
    [styles.todo_text_dark]: (themeContext.theme === 'dark'),
    [styles.todo_text_completed]: completed,
    [styles.todo_text_completed_dark]: (completed && themeContext.theme === 'dark')
  })

  return (
    <div 
      className={todo_container}
      {...draggableProvided.draggableProps}
      {...draggableProvided.dragHandleProps}
      ref={innerRef}
    >
      <Check handleCheck={ () => changeStateTodo(id) } isCompleted={completed} />

      <div
        className={textStyles}
        onClick={ () => changeStateTodo(id) }
      >
        {text}
      </div>


      <div
        className={styles.todo_delete}
        onClick={ () =>  {deleteTodo(id)} }
      >
        <div className={styles.imgCross}></div>
      </div>

    </div>
  )
}
