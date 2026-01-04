import useTaskList from "./useTaskList.js";
import Input from "./Input.jsx";
import TaskItem from "./TaskItem.jsx";
import styles from "./App.module.css";

export default function App() {
  const {taskList, handleLog, handleDelete} = useTaskList();

  return (
    <div className={styles.box}>
      <h1>Your tasks, Boss.</h1>
      <ul className={styles.list}>
        {taskList
          .toSorted((a, b) => b.priority - a.priority)
          .map((task) => (
            <li key={task.id}>
              <TaskItem {...task} onDelete={() => handleDelete(task.id)} />
            </li>
          ))}
      </ul>
      <img src="/serve.png" className={styles.img}></img>
      <div className={styles.divider}></div>
      <Input onLog={handleLog} />
    </div>
  );
}
