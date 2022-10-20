
import imgCross from "../images/icon-cross.svg";
import styles from "../scss/components/Todo.module.scss";
import { Check } from "./Check";
import clsx from 'clsx';

export const Todo = ({ id, text, changeStateTodo, deleteTodo, completed, innerRef, draggableProvided  }) => {

  const textStyles = clsx({
    [styles.todo_text]: true,
    [styles.todo_text_completed]: completed,
  })

  return (
    <div 
      className={styles.todo_container}
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
        <img src={ imgCross } alt="delete_todo" />
      </div>

    </div>
  )
}
