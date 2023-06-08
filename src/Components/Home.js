import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import TodoItem from "./TodoItem";

export default function Home() {
  const { todoList, searchText } = useContext(DataContext);
  let displayList = todoList.filter((i) => {
    return i.title.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <main>
      {todoList.length === 0
        ? "No todo items"
        : displayList.map((i) => {
            return <TodoItem key={i.id} {...i} />;
          })}
    </main>
  );
}
