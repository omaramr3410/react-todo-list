export function ToDoItem({id, title, checked, toggleTodo, deleteTodo}) {
  return (
    <li key={id}>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => toggleTodo(id, checked)}
        />
        {title}
      </label>
      <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </li>
  );
}
