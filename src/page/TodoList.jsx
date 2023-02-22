import React, { useState } from "react";
import { TodoApi } from "../tools/instance";

const TodoList = ({ id, isComplated, todo, i }) => {
  const [modify, setModify] = useState(false);
  const [update, setUpdate] = useState("");
  const [isCheckingBox, setIsCheckingBox] = useState(false);
  const [changeTodo, setChangeTodo] = useState(todo);

  const checkingBox = () => {
    setIsCheckingBox(!isCheckingBox);
  };

  const updateHandler = () => {
    setModify(!modify);
  };

  const dlelteHandler = () => {
    TodoApi.deleteTodo(id).then((res) => console.log(res));
  };

  return (
    <li>
      <label>
        {isComplated ? (
          <input type="checkbox" checked onClick={(e) => checkingBox(e)} />
        ) : (
          <input type="checkbox" onClick={(e) => checkingBox(e)} />
        )}
      </label>

      {modify === false ? (
        <>
          <span> {todo} </span>
          <button data-testid="modify-button" onClick={updateHandler}>
            수정
          </button>
          <button data-testid="delete-button" onClick={dlelteHandler}>
            삭제
          </button>
        </>
      ) : (
        <>
          <input
            data-testid="modify-input"
            defaultValue={changeTodo}
            onChange={(e) => setUpdate(e.target.value)}
          />
          <button
            data-testid="submit-button"
            onClick={(e) => {
              TodoApi.updateTodo({
                id,
                todo: update,
                isCompleted: isCheckingBox,
              }).then((res) => {
                setChangeTodo({ ...changeTodo, changeTodo: res.data.todo });
              });
              setModify(!modify);
            }}
          >
            제출
          </button>
          <button data-testid="cancel-button" onClick={updateHandler}>
            취소
          </button>
        </>
      )}
    </li>
  );
};

export default TodoList;
