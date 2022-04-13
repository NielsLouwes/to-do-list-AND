import React from "react";

const Todo = ({ text, todos, todo, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
  };

  //deleting an item
  // 1. we need access to the array of objects
  // 2. we need to check that the button we clicked matches ID of the item in aray
  // 3. when found, remove it from array (find or filter function?)
  // SUDO code
  // const removeItem = (nameOfItem = {
  //   ...todos.indexOf('textName');
  //   //remove that item from array
  // });

  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
