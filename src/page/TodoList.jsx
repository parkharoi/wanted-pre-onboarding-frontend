import React, { useState } from "react";

const TodoList = ({ create, setCreate, update, i }) => {
  const [modify, setModify] = useState(false);
  return (
    <li>
      <label>
        <input type="checkbox" />
      </label>
      {modify === false ? (
        <>
          <span> {update.todo} </span>
          <button
            data-testid="modify-button"
            onClick={() => {
              setModify(!modify);
            }}
          >
            수정
          </button>
          <button data-testid="delete-button">삭제</button>
        </>
      ) : (
        <>
          <input data-testid="modify-input" />
          <button data-testid="submit-button">제출</button>
          <button
            data-testid="cancel-button"
            onClick={() => {
              setModify(!modify);
            }}
          >
            취소
          </button>
        </>
      )}
    </li>
  );
};

export default TodoList;
