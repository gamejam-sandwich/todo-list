import {useState, useEffect} from "react";
import Input from "./Input.jsx";
import styles from "./App.module.css";

export default function App() {
  const [taskList, setTaskList] = useState([]);
  
  
  const handleLog = async () => {

  }

  const handleDelete = async () => {

  }

  return(
    <div className={styles.box}>
      <Input onLog={handleLog} />
      <ul>
        {taskList.map((task) => (
          <li key={task.id}>
            {task.name} | Priority: {task.priority}
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}