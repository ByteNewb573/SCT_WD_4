import React, { useEffect, useState } from "react";
import "../style/Home.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchPendingTodos();
  }, []);

  const fetchPendingTodos = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/todos");

      // Show only pending tasks
      const pendingTodos = res.data.filter(
        (todo) => !todo.completed
      );

      setTodos(pendingTodos);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="home">
      <div className="home-content">
        <p className="welcome-text">✨ Welcome to</p>

        <h1 className="home-title">
          TODO <span>App</span>
        </h1>

        <p className="home-description">
          Stay organized, manage your daily tasks efficiently, and keep
          everything in one place. A simple and beautiful way to track your
          productivity and achieve your goals.
        </p>

        <Link to="/add-todo" className="todo-btn">
          Add Todo
        </Link>
      </div>

      <div className="home-image">
        <div className="todo-card">
          <div className="card-header">
            <span>📒 My Pending Tasks</span>
          </div>

          {todos.length > 0 ? (
            todos.map((todo) => (
              <div className="task" key={todo._id}>
                <span>⬜</span>
                {todo.title}
              </div>
            ))
          ) : (
            <div className="task completed">
              <span>🎉</span>
              All tasks completed
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;