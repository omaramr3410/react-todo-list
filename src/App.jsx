import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";
import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  //Hook to track state of todos
  //look into localstorage for previous values o.w. set to empty array
  const [todos, setTodos] = useState(() => {
    const localVal = localStorage.getItem("ITEMS");
    if(!localVal)
      return [];
    else
      return JSON.parse(localVal);
  });

  //call every time state of todos list changes
  //listener for todos list
  useEffect(()=>{
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos]);

  function addTodo(title){
    setTodos((currTodos) => {
      return [
        ...currTodos,
        { id: crypto.randomUUID(), title: title, completed: false },
      ];
    });
  }

  function toggleTodo(id, checked) {
    setTodos((currTodos) => {
      return currTodos.map((todo) => {
        if (todo.id === id) {
          return {...todo, checked}
        }
        return todo
      });
    });
  }

  function deleteTodo(id) {
    setTodos(currTodos => {
      return currTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo}/>
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  );
}
