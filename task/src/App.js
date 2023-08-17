import React, { useState } from "react";
// import { BrowserRouter as Router, Routes } from "react-router-dom";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="app">
      <h1>Task Management App</h1>

      <TaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
