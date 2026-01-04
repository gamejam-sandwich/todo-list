import useTaskList from "./useTaskList.js";
import Input from "./Input.jsx";
import TaskTable from "./TaskTable.jsx";
import styles from "./App.module.css";

/**
 * Purpose: use the task list
 */

export default function App() {
  const {taskList, handleLog, handleDelete} = useTaskList();

  return (
    <div className={styles.box}>
      <h1>Your tasks, Boss.</h1>
      <TaskTable
        taskList={taskList}
        onDelete={handleDelete}
      />
      <img src="/serve.png" className={styles.img}/>
      <div className={styles.divider}/>
      <Input onLog={handleLog} />
    </div>
  );
}
