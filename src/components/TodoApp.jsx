import { useEffect, useState } from "react"
import { Features } from "./Features";
import { Todo } from "./Todo";
import { TodoInput } from "./TodoInput";
import { reorder } from "../functions/Reorder";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

export const TodoApp = () => {

  const [todos, setTodos] = useState([]);
  const [itemsLeft, setItemsLeft] = useState(null);
  const [filterState, setFilterState] = useState(true);
  const [allFilter, setAllFilter] = useState(true);

  useEffect(() => {
    const itemsWithFalseState = todos.filter( (todo) => todo.completed === false ).length;
    setItemsLeft(itemsWithFalseState);
  }, [todos])

  const addTodo = (newTodo) => {
    if(newTodo.text.trim()) {
      newTodo.text = newTodo.text.trim();
      setTodos([newTodo, ...todos]);
    };
  }

  const changeStateTodo = (id) => {
    const updateTodos = todos.map( (todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    } )

    setTodos(updateTodos);
  }

  const deleteTodo = (id) => {
    const updateTodos = todos.filter( (todo) => todo.id !== id);
    setTodos(updateTodos);
  }

  const deleteCompletedTodos = () => {
    const todosCompleted = todos.filter( (todo) => todo.completed === false );
    setTodos(todosCompleted);
  }

  return (
    <>
      <TodoInput sendNewTodo={addTodo} />

      <DragDropContext 
        onDragEnd={(result) => {
          const {source, destination} = result;
          if(!destination) {
            return;
          }
          if( (source.index === destination.index) && (source.droppableId === destination.droppableId) ) {
            return;
          }

          const reorderTodos = reorder(todos, source.index, destination.index);
          setTodos(reorderTodos);
        }}
      >
        <Droppable 
          droppableId="task"
        >
          { (droppableProvided) => (
            <div 
              ref={droppableProvided.innerRef}
              {...droppableProvided.droppableProps}
              className="todo_list_container"
            >
              {
                todos.map( (todo, index) => 
                {if( ( filterState === todo.completed) || (allFilter))
                {
                  return (
                    <Draggable
                      key={todo.id}
                      draggableId={todo.id}
                      index={index}
                    >
                      { (draggableProvided) => (
                      <Todo
                        innerRef={draggableProvided.innerRef}
                        draggableProvided={draggableProvided}

                        id={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                        changeStateTodo={changeStateTodo}
                        deleteTodo={deleteTodo}
                      />)}
                    </Draggable>
                  )}
                })
              }
              {droppableProvided.placeholder}
            </div>
            )
          }

        </Droppable>

        </DragDropContext>
        <Features
          itemsLeft={itemsLeft}
          setAllFilter={setAllFilter}
          setFilterState={setFilterState}
          deleteCompletedTodos={deleteCompletedTodos}
        />
    
    </>


  )
}