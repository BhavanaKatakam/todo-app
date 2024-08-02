import React, { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./components/List";
import TodoForm from "./components/Form";
import Search from "./components/Search";
import { fetchTodos, saveTodos } from "./services/todoService";

function App() {
  const [todos, setTodos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const storedTodos = fetchTodos();
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: todos.length + 1,
      text,
      isChecked: false,
      description: "",
      timestamp: new Date().toLocaleString()
    };
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id, updatedTodo) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, ...updatedTodo } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="todos-bg-container">
      <div className="container">
        <h1 className="todos-heading">Todos</h1>
        <TodoForm addTodo={addTodo} />
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <TodoList
          todos={filteredTodos}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
