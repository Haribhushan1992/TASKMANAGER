import React, { useState } from "react";

function TaskForm({ onAddTask }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleAddTask = () => {
    const newTask = { name, description, deadline };
    onAddTask(newTask);
    setName("");
    setDescription("");
    setDeadline("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default TaskForm;
