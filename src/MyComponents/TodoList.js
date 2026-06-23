import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/Todos.css";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/todos");
            setTodos(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const toggleStatus = async (id, completed) => {
        try {
            await axios.put(
                `http://localhost:5000/api/todos/${id}`,
                {
                    completed: !completed,
                }
            );

            fetchTodos();
        } catch (err) {
            console.log(err);
        }
    };

    const deleteTodo = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/todos/${id}`);

            setTodos((prevTodos) =>
                prevTodos.filter((todo) => todo._id !== id)
            );
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="todos-container">
            <h2 className="page-title">My Tasks</h2>

            {todos.length === 0 ? (
                <div className="no-todos">
                    <div className="empty-icon">🤖</div>

                    <h3>No Tasks Yet</h3>

                    <p>
                        Start organizing your work by creating your first task.
                    </p>
                </div>
            ) : (
                <div className="todo-grid">
                    {todos.map((todo) => (
                        <div className="todo-box" key={todo._id}>
                            <div className="todo-header">
                                <div className="date">
                                    🗓️{" "}
                                    {todo.createdAt
                                        ? new Date(
                                              todo.createdAt
                                          ).toLocaleDateString("en-IN", {
                                              day: "2-digit",
                                              month: "short",
                                              year: "numeric",
                                          })
                                        : "No Date"}
                                </div>

                                <div
                                    className={
                                        todo.completed
                                            ? "badge completed"
                                            : "badge pending"
                                    }
                                >
                                    {todo.completed
                                        ? "✅ Completed"
                                        : "⏳ Pending"}
                                </div>
                            </div>

                            <h3>{todo.title}</h3>

                            <p className="todo-description">
                                {todo.desc}
                            </p>

                            <div className="btn-group">
                                <button
                                    className="complete-btn"
                                    onClick={() =>
                                        toggleStatus(
                                            todo._id,
                                            todo.completed
                                        )
                                    }
                                >
                                    {todo.completed
                                        ? "↩ Mark Pending"
                                        : "✔ Mark Complete"}
                                </button>

                                <button
                                    className="delete-btn"
                                    onClick={() =>
                                        deleteTodo(todo._id)
                                    }
                                >
                                    🗑 Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TodoList;