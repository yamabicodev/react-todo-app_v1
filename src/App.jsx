import "./styles.css";
import { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { InCompleteTodos } from "./components/InCompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

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

  const onClickDelete = (index) => {
    // 参照関係の無い新しい配列を定義
    const todos = [...incomplateTodos];
    todos.splice(index, 1);
    setIncomplateTodos(todos);
  };

  const onClickComplate = (index) => {
    // 参照関係の無い新しい配列を定義
    const newIncomplateTodos = [...incomplateTodos];
    newIncomplateTodos.splice(index, 1);
    // 参照関係の無い新しい配列を定義
    const newcomplateTodos = [...complateTodos, incomplateTodos[index]];
    setIncomplateTodos(newIncomplateTodos);
    setComplateTodos(newcomplateTodos);
  };

  const onClickBack = (index) => {
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
        disabled={incomplateTodos.length >= 5}
      />
      {incomplateTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるtodoは５個までだ！！</p>
      )}

      <InCompleteTodos
        todos={incomplateTodos}
        onClickComplate={onClickComplate}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={complateTodos} onClickBack={onClickBack} />
    </>
  );
};
