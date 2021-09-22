import "./styles.css";
import { useState } from "react";

export const App = () => {
  const [incomplateTods, setIncomplateTods] = useState(["TODOI-1", "TODOI-2"]);
  const [complateTods, setComplateTods] = useState(["TODOC-1", "TODOC-2"]);

  return (
    <>
      <h1>TODO管理</h1>
      <div className="input-area">
        <input id="add-text" placeholder="TODOを追加" type="text" />
        <button>追加</button>
      </div>
      <div className="incompleted-area">
        <h3 className="title">未完了のTODO一覧</h3>
        <ul id="incompleted-list">
          {incomplateTods.map((todo) => {
            return (
              <li key={todo} className="list-row">
                <div className="todo-item">
                  <p className="todo">{todo}</p>
                  <button>完了</button>
                  <button>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="completed-area">
        <h3 className="title">完了済みTODO一覧</h3>
        <ul id="completed-list">
          {complateTods.map((todo) => {
            return (
              <li key={todo} className="list-row">
                <div className="todo-item">
                  <p className="todo">{todo}</p>
                  <button>完了</button>
                  <button>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
