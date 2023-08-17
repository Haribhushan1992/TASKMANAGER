function TaskList({ tasks }) {
  console.log(tasks);
  if (!tasks || tasks.length === 0) {
    return <div>No tasks to display.</div>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.name}
          <strong>{task.name}</strong>
          <p>{task.description}</p>
          <p>Deadline: {task.deadline}</p>
        </li>
      ))}
    </ul>
  );
}
export default TaskList;
