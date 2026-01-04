import React from "react";
import TaskItem from "./TaskItem.jsx";
import styles from "./App.module.css";

/*
*   Purpose:
*   Props:
*/
export default function TaskTable(props) {
  const { taskList, onDelete } = props;

  return (
    <ul className={styles.list}>
      {taskList
        .toSorted((a, b) => b.priority - a.priority)
        .map((task) => (
          <li key={task.id}>
            <TaskItem {...task} onDelete={() => onDelete(task.id)} />
          </li>
        ))}
    </ul>
  );
}
