import { useRef, useState } from "react";
import styles from "./Input.module.css";

export default function Input(props) {
  const taskRef = useRef(null);
  const priorityRef = useRef(null);
  const [error, setError] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const task = Object.fromEntries(new FormData(ev.target));

    setError("");
    const taskName = task.task.trim();
    if (!taskName) {
      setError("Task cannot be blank.");
      taskRef.current.focus();
      return;
    }

    const priority = task.priority;
    taskRef.current.value = "";
    priorityRef.current.value = "3";
    taskRef.current.focus();
    props.onLog(taskName, priority);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className={styles.p}>More for the platter.</p>
      <div className={styles.box}>
        <input ref={taskRef} name="task" placeholder="Ex: Read chapter 20" className={styles.input} />
        <select ref={priorityRef} name="priority" className={styles.dropdown}>
          <option value="3">Urgent</option>
          <option value="2">High</option>
          <option value="1">Normal</option>
          <option value="0">Low</option>
        </select>
        <button type="submit" className={styles.button}>Submit</button>
      </div>
      <div>{error}</div>
    </form>
  );
}
