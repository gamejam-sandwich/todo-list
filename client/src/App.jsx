import { useState, useEffect } from "react";
import api from "./api.js";
import Input from "./Input.jsx";
import styles from "./App.module.css";

export default function App() {
  const [taskList, setTaskList] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await api.get("/task-list");
      console.log(data);
      setTaskList(data);
    })();
  }, []);

  const handleLog = async (task, priority) => {
    console.log(task, priority);
    const { data } = await api.post("/task-list", { task, priority });
    setTaskList((prev) => [...prev, data]);
  };

  const handleDelete = async (id) => {
    await api.delete(`/task-list/${id}`);
    setTaskList((prev) => prev.filter((food) => food.id !== id));
  };

  const priorityList = ["Low", "Normal", "High", "Urgent"];
  return (
    <div className={styles.box}>
      <h1>Your tasks, Boss.</h1>
      <ul className={styles.list}>
        {taskList.toSorted((a, b) => b.priority - a.priority).map((task) => (
          <li key={task.id}>
            {task.task} | Priority: {priorityList[task.priority]}
            <button
              onClick={() => handleDelete(task.id)}
              className={styles.button}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <img src="/serve.png" className={styles.img}></img>
      <div className={styles.divider}></div>
      <Input onLog={handleLog} />
    </div>
  );
}
