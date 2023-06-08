import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import DataContext from "../context/DataContext";
import api from "../api/createAxios";

export default function TodoItem({ id, checked, title }) {
  const { todoList, setTodoList } = useContext(DataContext);

  const checkedChanged = async () => {
    let newList = todoList.map((i) => {
      return i.id === id ? { ...i, checked: !checked } : i;
    });
    setTodoList(newList);
    try {
      await api.patch(`/todoList/${id}`, { checked: !checked });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async () => {
    let newList = todoList.filter((i) => {
      return i.id !== id;
    });
    setTodoList(newList);
    try {
      await api.delete(`/todoList/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="item">
      <input
        type="checkbox"
        id="checked"
        checked={checked}
        onChange={checkedChanged}
      />
      <label htmlFor="checked">{title}</label>
      <FaTrash onClick={deleteTodo} />
    </div>
  );
}
