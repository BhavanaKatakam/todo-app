// src/components/TodoList.js
import React from "react";
import Item from "./Item";

function List({ todos, updateTodo, deleteTodo }) {
  return (
    <ul className="todo-items-container">
      {todos.map((todo) => (
        <Item key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
}

export default List;
