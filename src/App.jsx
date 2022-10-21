import { createContext, useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { TodoApp } from './components/TodoApp';
import styles from './scss/components/App.module.scss';

export const ThemeContext = createContext(null);

const App = () => {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light") );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <main className={styles.container_app}>
        <div className={styles.flex_app}>
          <div className={styles.card_app}>

          <Header changeTheme={toggleTheme} theme={theme}/>
          <TodoApp />

          </div>
        </div>
        <Footer />
      </main>

    </ThemeContext.Provider>
  )
}

export default App;