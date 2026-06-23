
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./MyComponents/Header";
import Home from "./MyComponents/Home";
import About from "./MyComponents/About";
import AddTodo from "./MyComponents/AddTodo";
import TodoList from "./MyComponents/TodoList";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/add-todo" element={<AddTodo />} />
        <Route path="/todo-list" element={<TodoList/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;