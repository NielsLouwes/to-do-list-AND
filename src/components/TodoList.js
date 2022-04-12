import React from "react";

const TodoList = ({ todos }) => {
  return (
    <>
      <div className="todo-container">
        <ul className="todo-list">
          {todos.map((todo) => (
            <li> {todo.text} </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
