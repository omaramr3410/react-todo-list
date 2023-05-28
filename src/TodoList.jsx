import { ToDoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && <strong>No Todos</strong>}
      {todos.map((todo, index) => {
        return <ToDoItem {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} key={todo.id}/>;
      })}
    </ul>
  );
}
