
export const Features = ({ itemsLeft, setAllFilter, setFilterState, deleteCompletedTodos }) => {
  return (
    <div className="todo_features_container">
      <p>{itemsLeft} Items Left</p>
      <div className="todo_features_currentState">
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
      <button
        onClick={deleteCompletedTodos}
      >
        Clear Completed
      </button>
    </div>
  )
}
