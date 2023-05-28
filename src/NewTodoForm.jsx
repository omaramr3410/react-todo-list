import { useState } from "react";

export function NewTodoForm({onSubmit}) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (newItem === "") return;

    // console.log(newItem, todos);
    onSubmit(newItem);

    //reset the Item name
    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          placeholder="Enter Item Name"
          value={newItem}
          type="text"
          name="item"
          onChange={(e) => setNewItem(e.target.value)}
        />
      </div>
      <button className="btn btn-primary">Add</button>
    </form>
  );
}
