import "./styles.css";

export const App = () => {
  return (
    <>
      <h1>TODO管理</h1>
      <div>
        <input placeholder="TODOを追加" type="text" />
        <button>追加</button>
      </div>
      <div>
        <h3>未完了のTODO一覧</h3>
        <ul>
          <li>
            <div>
              <p>TODO</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
          <li>
            <div>
              <p>TODO</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <h3>完了済みTODO一覧</h3>
        <ul>
          <li>
            <div>
              <p>TODO</p>
              <button>戻す</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
