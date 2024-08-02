import React, { useState } from "react";

function Form({ addTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    addTodo(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <h2 className="create-task-heading">
        Create <span className="create-task-heading-subpart">Task</span>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="todo-user-input"
          placeholder="What needs to be done?"
        />
        <button className="button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default Form;
