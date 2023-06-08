import "./index.css";
import AddTodo from "./Components/AddTodo";
import SearchTodo from "./Components/SearchTodo";
import Home from "./Components/Home";
import Header from "./Components/Header";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <div className="App">
      <Header />
      <DataProvider>
        <AddTodo />
        <SearchTodo />
        <Home />
      </DataProvider>
    </div>
  );
}

export default App;
