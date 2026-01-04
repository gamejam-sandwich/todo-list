import React from "react";
import styles from "./App.module.css";
const priorityList = ["Low", "Normal", "High", "Urgent"];
const categoryList = ["Personal", "Work", "School"];

/**
 * Purpose: Format each task item to display its content/priority/category.
 * Props: All columns + onDelete function
 */
export default function TaskItem(props) {
  const { id, task, priority, category, onDelete } = props;
  return (
    <div>
      {task} | Priority: {priorityList[priority]} | Category: {categoryList[category]}
      <button onClick={() => onDelete(id)} className={styles.button}>
        Delete
      </button>
    </div>
  );
}
