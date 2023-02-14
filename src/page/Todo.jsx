import React, { useEffect, useState } from "react";
import { TodoApi } from "../tools/instance";

const Todo = () => {
  const [create, setCreate] = useState([]);
  const [modify, setModify] = useState(false);

  console.log(create);

  useEffect(() => {
    TodoApi.getTodos()
      .then((res) => setCreate(res.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const creatHandler = async () => {
    await TodoApi.createTodo({
      todo: create,
    })
      .then((res) => setCreate([...create, res.data]))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <>
        <input
          data-testid="new-todo-input"
          onChange={(e) => setCreate(e.target.value)}
        />
        <button data-testid="new-todo-add-button" onClick={creatHandler}>
          추가
        </button>
      </>

      <div>
        <li>
          <label>
            <input type="checkbox" />
          </label>
          {modify === false ? (
            <>
              <span> create.todo[0] </span>
              <button data-testid="modify-button">수정</button>
              <button data-testid="delete-button">삭제</button>
            </>
          ) : (
            <>
              <input data-testid="modify-input" />
              <button data-testid="submit-button">제출</button>
              <button data-testid="cancel-button">취소</button>
            </>
          )}
        </li>
      </div>
    </div>
  );
};

export default Todo;
