import React from "react";
export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div className="completed-area">
      <h3 className="title">完了済みTODO一覧</h3>
      <ul id="completed-list">
        {todos.map((todo, index) => {
          return (
            <li key={index} className="list-row">
              <div className="todo-item">
                <p className="todo">{todo}</p>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
