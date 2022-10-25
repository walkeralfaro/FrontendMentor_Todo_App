import clsx from 'clsx';
import { useContext } from 'react';
import { ThemeContext } from "../App";
import styles from '../scss/components/Features.module.scss';

export const Features = ({ itemsLeft, setAllFilter, setFilterState, deleteCompletedTodos }) => {

  const themeContext = useContext(ThemeContext);

  const todo_features_aditional = clsx ({
    [styles.features_aditional_light]: true,
    [styles.features_aditional_dark]: themeContext.theme === 'dark',
  })

  const todo_features_currentState = clsx ({
    [styles.features_current_light]: true,
    [styles.features_current_dark]: themeContext.theme === 'dark',
  })



  return (
    
    <>
      <div className={todo_features_aditional}>

        <p>{itemsLeft} Items Left</p>

        <button onClick={deleteCompletedTodos} >
          Clear Completed
        </button>
        
      </div>


      <div className={todo_features_currentState}>
        <button
          onClick={() => setAllFilter(true)}
        >
          All
        </button>
        <button
          onClick={() => {
            setAllFilter(false);
            setFilterState(false)}}
        >
          Active
        </button>
        <button
          onClick={() => {
            setAllFilter(false);
            setFilterState(true)}}
        >
          Completed
        </button>
      </div>
    
    </>



  )
}
