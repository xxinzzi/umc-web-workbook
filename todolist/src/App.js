import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";
import s from "./App.module.css";

function App() {
  return (
    <div className={s.App}>
      <div className={s.Wrapper}>
        <span>TodoList</span>
        <InputTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
