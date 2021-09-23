import "./styles.css";
import { useState } from "react";
import { InputTodo } from "./components/InputTodo";

export const App = () => {
  const [inputTodoText, setinputTodoText] = useState("");
  const [incomplateTodos, setIncomplateTodos] = useState([]);
  const [complateTodos, setComplateTodos] = useState([]);
  const inputTodo = (event) => setinputTodoText(event.target.value);

  const addTodo = () => {
    if (inputTodoText === "") return;
    // 参照関係の無い新しい配列を定義
    const newIncompleteTodos = [...incomplateTodos, inputTodoText];
    setIncomplateTodos(newIncompleteTodos);
    setinputTodoText("");
  };

  const deleteTodo = (index) => {
    // 参照関係の無い新しい配列を定義
    const todos = [...incomplateTodos];
    todos.splice(index, 1);
    setIncomplateTodos(todos);
  };

  const complateTodo = (index) => {
    // 参照関係の無い新しい配列を定義
    const newIncomplateTodos = [...incomplateTodos];
    newIncomplateTodos.splice(index, 1);
    // 参照関係の無い新しい配列を定義
    const newcomplateTodos = [...complateTodos, incomplateTodos[index]];
    setIncomplateTodos(newIncomplateTodos);
    setComplateTodos(newcomplateTodos);
  };

  const backTodo = (index) => {
    const newCompleteTodos = [...complateTodos];
    newCompleteTodos.splice(index, 1);

    const newIncomplateTodos = [...incomplateTodos, complateTodos[index]];

    setComplateTodos(newCompleteTodos);
    setIncomplateTodos(newIncomplateTodos);
  };

  return (
    <>
      <h1>TODO管理</h1>
      <InputTodo
        inputTodoText={inputTodoText}
        onChange={inputTodo}
        onClick={addTodo}
      />
      <div className="incompleted-area">
        <h3 className="title">未完了のTODO一覧</h3>
        <ul id="incompleted-list">
          {incomplateTodos.map((todo, index) => {
            return (
              <li key={index} className="list-row">
                <div className="todo-item">
                  <p className="todo">{todo}</p>
                  <button onClick={() => complateTodo(index)}>完了</button>
                  <button onClick={() => deleteTodo(index)}>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="completed-area">
        <h3 className="title">完了済みTODO一覧</h3>
        <ul id="completed-list">
          {complateTodos.map((todo, index) => {
            return (
              <li key={index} className="list-row">
                <div className="todo-item">
                  <p className="todo">{todo}</p>
                  <button onClick={() => backTodo(index)}>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
