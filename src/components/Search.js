import React from "react";

function Search({ searchQuery, setSearchQuery }) {
  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="todo-user-input"
        placeholder="Search tasks"
      />
    </div>
  );
}

export default Search;
