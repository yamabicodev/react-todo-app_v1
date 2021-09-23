import React from "react";

//CSS in JSでCSSを書くパターン。
const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InputTodo = (props) => {
  const { inputTodoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input
        id="add-text"
        placeholder="TODOを追加"
        type="text"
        value={inputTodoText}
        onChange={onChange}
        disabled={disabled}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
