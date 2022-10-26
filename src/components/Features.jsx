import clsx from 'clsx';
import { useContext } from 'react';
import { ThemeContext } from "../App";
import styles from '../scss/components/Features.module.scss';

export const Features = ({ itemsLeft, setAllFilter, setFilterState, deleteCompletedTodos, filterState, allFilter }) => {

  const themeContext = useContext(ThemeContext);

  const todo_features_aditional = clsx ({
    [styles.features_aditional_light]: true,
    [styles.features_aditional_dark]: themeContext.theme === 'dark',
  })

  const todo_features_currentState = clsx ({
    [styles.features_current_light]: true,
    [styles.features_current_dark]: themeContext.theme === 'dark',
  })

  // Logic feature pressed --start
  const all_button = allFilter;
  const active_button = (!allFilter && !filterState);
  const completed_button = (!allFilter && filterState);

  const all_pressed = clsx ({
    [styles.button_actived]: all_button,
  })

  const active_pressed = clsx ({
    [styles.button_actived]: active_button,
  })

  const completed_pressed = clsx ({
    [styles.button_actived]: completed_button,
  })
  // Logic feature pressed --end

  return (
    
    <div className={styles.todo_features_container}>
      <div className={todo_features_aditional}>

        <p>{itemsLeft} Items Left</p>

        <button onClick={deleteCompletedTodos} >
          Clear Completed
        </button>
        
      </div>
      
      <div className={todo_features_currentState}>
        <button
          onClick={() => setAllFilter(true)}
          className={all_pressed}
        >
          All
        </button>
        <button
          onClick={() => {
            setAllFilter(false);
            setFilterState(false)}}
          className={active_pressed}
        >
          Active
        </button>
        <button
          onClick={() => {
            setAllFilter(false);
            setFilterState(true)}}
          className={completed_pressed}
        >
          Completed
        </button>
      </div>
    
    </div>



  )
}
