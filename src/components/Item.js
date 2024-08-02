import React, { useState } from "react";

function Item({ todo, updateTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [description, setDescription] = useState(todo.description);

  const handleToggleCheck = () => {
    updateTodo(todo.id, { isChecked: !todo.isChecked });
  };

  const handleSaveEdit = () => {
    updateTodo(todo.id, { text: editText, description, timestamp: new Date().toLocaleString() });
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditText(todo.text);
    setDescription(todo.description);
  };

  return (
    <li className="todo-item-container">
      <div className="d-flex flex-row">
        <input
          type="checkbox"
          checked={todo.isChecked}
          onChange={handleToggleCheck}
          className="checkbox-input"
        />
        {isEditing ? (
          <div className="label-container d-flex flex-row">
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="todo-user-input"
            />
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="todo-user-input"
              placeholder="Description"
            />
            <button className="button" onClick={handleSaveEdit}>
              Save
            </button>
            <button className="button" onClick={handleCancelEdit}>
              Cancel
            </button>
          </div>
        ) : (
          <div className="label-container d-flex flex-row">
            <label className={`checkbox-label ${todo.isChecked ? "checked" : ""}`}>
              {todo.text}
            </label>
            <button className="button" onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </div>
        )}
      </div>
      {!isEditing && (
        <div onClick={() => setIsEditing(true)}>
          <p>{description}</p>
          <p>{todo.timestamp}</p>
        </div>
      )}
    </li>
  );
}

export default Item;
