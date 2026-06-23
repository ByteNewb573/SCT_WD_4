import React from "react";
import "../style/About.css";

import {
  FaTasks,
  FaSearch,
  FaEdit,
  FaCheckCircle
} from "react-icons/fa";

const About = () => {
  return (
    <section className="about">

      <div className="about-header">
        <h1>About Todo App</h1>

        <p>
          Organize your tasks, boost productivity and manage your daily
          workflow with a modern and easy-to-use task management solution.
        </p>
      </div>

      {/* Side by Side Content */}

      <div className="about-content">

        <div className="about-box">
          <h2>About Todo App</h2>

          <p>
            <span className="highlight">Todo App</span> is a simple and
            user-friendly task management application designed to help
            users stay organized and productive.
          </p>

          <p>
            Create, edit, search and complete tasks with ease while
            keeping track of your daily goals and responsibilities.
          </p>
        </div>

        <div className="about-box">
          <h2>Stay Organized & Productive</h2>

          <p>
            Whether you're a student, professional, or anyone managing
            a busy schedule, Todo App helps you organize your work
            efficiently.
          </p>

          <p>
            Focus on what matters most, improve productivity, and
            accomplish more every day with a clean and modern
            interface.
          </p>
        </div>

      </div>

      {/* Features */}

      <div className="features-section">

        <h2>Key Features</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <FaTasks className="feature-icon" />
            <h4>Create Tasks</h4>
            <p>Create and manage daily tasks easily.</p>
          </div>

          <div className="feature-card">
            <FaSearch className="feature-icon" />
            <h4>Search Tasks</h4>
            <p>Quickly find any task.</p>
          </div>

          <div className="feature-card">
            <FaEdit className="feature-icon" />
            <h4>Edit Tasks</h4>
            <p>Update task details anytime.</p>
          </div>

          <div className="feature-card">
            <FaCheckCircle className="feature-icon" />
            <h4>Mark Complete</h4>
            <p>Track completed tasks efficiently.</p>
          </div>

        </div>
      </div>

      <div className="about-banner">
        <h2>Stay Organized • Stay Productive</h2>
        <p>Achieve Your Goals With Todo App 🚀</p>
      </div>

    </section>
  );
};

export default About;