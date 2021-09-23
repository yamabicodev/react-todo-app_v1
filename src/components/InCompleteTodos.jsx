import React from "react";

export const InCompleteTodos = (props) => {
  const { todos, onClickComplate, onClickDelete } = props;
  return (
    <div className="incompleted-area">
      <h3 className="title">未完了のTODO一覧</h3>
      <ul id="incompleted-list">
        {todos.map((todo, index) => {
          return (
            <li key={index} className="list-row">
              <div className="todo-item">
                <p className="todo">{todo}</p>
                <button onClick={() => onClickComplate(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
