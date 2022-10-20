
import { useState } from 'react';
import { Header } from './components/Header'
import { TodoApp } from './components/TodoApp'

export const App = () => {
  const [theme, setTheme] = useState(true);

  return (
    <>
      <Header 
        changeTheme={() => setTheme(!theme)}
        theme={theme}
      />
      <TodoApp />
    
    </>
  )
}
