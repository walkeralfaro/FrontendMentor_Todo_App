import styles from "../styles/Check.module.css"
import imgCheck from "../images/icon-check.svg";

export const Check = ({ isCompleted, handleCheck }) => {

  return (
    <div
      className={styles.todo_complete_input}
      onClick={handleCheck}
    >
      { isCompleted ? <img src={imgCheck} alt="image_check"/> : null }
    </div>
  )
}