import { createContext, useEffect, useState } from "react";
import api from "../api/createAxios";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        let response = await api.get("/todoList");
        setTodoList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchInitialData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        todoList,
        setTodoList,
        searchText,
        setSearchText
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
