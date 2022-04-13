import React from "react";

const Todo = ({ text, todos, todo, setTodos }) => {
  //the delete hanlders filters based on a NON match between the element ID and the singular todoItem we passed on through props
  const deleteHandler = () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
  };

  //For completing items, we need to map through, find a match with our select todo , return a new object with its existing attributes by spreading ... and then change completed to TRUE.
  const completeHandler = () => {
    setTodos(
      todos.map((element) => {
        if (element.id === todo.id) {
          return {
            ...element,
            completed: true
          };
        }
        return element;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
