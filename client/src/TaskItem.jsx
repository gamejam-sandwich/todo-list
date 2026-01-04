import React from "react";
import styles from "./App.module.css";
const priorityList = ["Low", "Normal", "High", "Urgent"];

export default function TaskItem(props) {
  const { id, task, priority, onDelete } = props;
  return (
    <div>
      {task} | Priority: {priorityList[priority]}
      <button onClick={() => onDelete(id)} className={styles.button}>
        Delete
      </button>
    </div>
  );
}
