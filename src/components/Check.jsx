import styles from "../scss/components/Check.module.scss";
import clsx from "clsx";
import { useContext } from "react";
import { ThemeContext } from "../App";

export const Check = ({ isCompleted, handleCheck }) => {

  const themeContext = useContext(ThemeContext);

  const checkStyles = clsx ({
    [styles.check]: true,
    [styles.check_dark]: (themeContext.theme === 'dark'),
    [styles.check_hover]: !isCompleted,
    [styles.check_hover_dark]: (!isCompleted && (themeContext.theme === 'dark') ),
    [styles.check_completed]: isCompleted,
  })

  const imgCheckStyles = clsx ({
    [styles.imgCheck]:isCompleted,
    [styles.imgCheck_no]:true,
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
