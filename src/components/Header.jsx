
import clsx from "clsx";
import { useContext } from "react";
import { ThemeContext } from "../App";
import styles  from "../scss/components/Header.module.scss";


export const Header = ({ changeTheme }) => {
  const themeContext = useContext(ThemeContext);

  const header_theme_icon = clsx({
    [styles.icon_light_theme]: true,
    [styles.icon_dark_theme]: (themeContext.theme === 'dark')
  });

 
  return (
    <div className={styles.header_container}>
      <h1 className={styles.header_h1}>todo</h1>
      <div className={styles.header_theme}>
        <div
          onClick={changeTheme}
          className={header_theme_icon}
        >
        </div>
      </div>
    </div>
  )
}
