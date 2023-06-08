import React, { useContext, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";
import DataContext from "../context/DataContext";
import api from "../api/createAxios";

export default function AddTodo() {
  const [title, setTitle] = useState("");
  const { todoList, setTodoList } = useContext(DataContext);
  const inputRef = useRef();

  const formSubmitted = async (e) => {
    e.preventDefault();
    let id = todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1;
    let newTodo = {
      id,
      checked: false,
      title,
    };
    setTodoList(todoList.concat(newTodo));
    setTitle("");
      inputRef.current.focus();
    try {
      await api.post("/todoList", newTodo);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="addForm" onSubmit={formSubmitted}>
      <label htmlFor="title">Add Todo</label>
      <input
        type="text"
        id="title"
        ref={inputRef}
        required
        autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}
