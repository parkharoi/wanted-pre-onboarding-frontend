import React, { useEffect, useState } from "react";
import { TodoApi } from "../tools/instance";
import TodoList from "./TodoList";

const Todo = () => {
  const [create, setCreate] = useState([]);
  const [make, setMake] = useState("");

  useEffect(() => {
    TodoApi.getTodos()
      .then((res) => setCreate(res.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const creatHandler = async () => {
    await TodoApi.createTodo({
      todo: make,
    })
      .then((res) => setCreate([...create, res?.data]))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <>
        <input
          data-testid="new-todo-input"
          onChange={(e) => setMake(e.target.value)}
        />
        <button data-testid="new-todo-add-button" onClick={creatHandler}>
          추가
        </button>
      </>

      <div>
        {create?.map((todos, i) => (
          <TodoList
            id={todos.id}
            isComplated={todos.isComplated}
            todo={todos.todo}
            key={todos.id}
            i={i}
          ></TodoList>
        ))}
      </div>
    </div>
  );
};

export default Todo;
