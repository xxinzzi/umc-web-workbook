import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove, complete } from "../redux/todoSlice";
import s from "./TodoList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function TodoList() {
  const todolist = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  console.log(todolist);

  const todolistView = todolist.map((todo, idx) => (
    <li className={s.list} key={todo.id}>
      <input
        className={s.check}
        type="checkbox"
        onChange={() => dispatch(complete(todo.id))}
        id={`check${idx}`}
      />
      <label htmlFor={`check${idx}`}></label>
      <div className={s.todolist}>
        {todo.complete ? <del>{todo.text}</del> : <>{todo.text}</>}
      </div>
      <button
        className={s.deleteBtn}
        type="button"
        onClick={() => dispatch(remove(todo.id))}
      >
        <FontAwesomeIcon
          icon={faTrashCan}
          style={{ color: "rgb(90, 90, 90)" }}
        />
      </button>
    </li>
  ));

  return (
    <>
      <ul>{todolistView}</ul>
    </>
  );
}
