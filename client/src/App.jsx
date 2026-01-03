import {useState, useEffect} from "react";
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
    const { data } = await api.post("/task-list", {task, priority});
    setTaskList(prev => [...prev, data]);
  }

  const handleDelete = async () => {

  }

  const priorityList = ["Low", "Normal", "High", "Urgent"];
  return(
    <div className={styles.box}>
      <Input onLog={handleLog} />
      <ul>
        {taskList.map((task) => (
          <li key={task.id}>
            {task.task} | Priority: {priorityList[task.priority]}
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}