
import clsx from "clsx";
import { useState } from "react";
import styles  from "../scss/components/Header.module.scss";

export const Header = ({ changeTheme, theme }) => {

  const header_theme_icon = clsx({
    [styles.lightTheme]: true,
    [styles.darkTheme]: !theme

  })

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
