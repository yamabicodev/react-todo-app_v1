import React from "react";

export const InputTodo = (props) => {
  const { inputTodoText, onChange, onClick } = props;
  return (
    <div className="input-area">
      <input
        id="add-text"
        placeholder="TODOを追加"
        type="text"
        value={inputTodoText}
        onChange={onChange}
      />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
