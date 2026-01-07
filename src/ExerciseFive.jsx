function ViewTasks() {
  const tasks = [
    // { task: "Make bed" },
    // { task: "Clean room" },
    // { task: "Buy gift for a friend" },
    // { task: "Eat Kebabas" },
  ];

  return (
    <>
      <h1>Tasks list</h1>

      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <ul>
          {tasks.map((item, index) => (
            <li key={index}>{item.task}</li>
          ))}
        </ul>
      )}
    </>
  );
}
export default ViewTasks;
