import styles from "../scss/components/Check.module.scss";
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
