import styles from "../scss/components/Check.module.scss";
import clsx from "clsx";

export const Check = ({ isCompleted, handleCheck }) => {

  const checkStyles = clsx ({
    [styles.check]: true,
    [styles.check_hover]: !isCompleted,
    [styles.check_completed]: isCompleted
  })

  const imgCheckStyles = clsx ({
    [styles.imgCheck]:isCompleted,
  })

  return (
    <div
      className={checkStyles}
      onClick={handleCheck}
    >
      <div className={imgCheckStyles}></div>
    </div>
  )
}
