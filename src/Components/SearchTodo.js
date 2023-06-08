import React, { useContext } from "react";
import DataContext from "../context/DataContext";

export default function SearchTodo() {
  const { searchText, setSearchText } = useContext(DataContext);
  return (
    <form className="searchForm">
      <label htmlFor="search">Search</label>
      <input
        type="text"
        id="search"
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </form>
  );
}
