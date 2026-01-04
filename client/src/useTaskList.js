import { useState, useEffect } from "react";
import api from "./api.js";

/**
 * Purpose: manipulate the list of tasks
 * handleLog: takes task,priority,category params. Calls POST to add a new task to table. Adds new task to taskList.
 * handelDelete: takes id param. Calls DELETE to remove task from table by id. Filters taskList to remove by id.
 */
export default function useTaskList() {
  const [taskList, setTaskList] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await api.get("/task-list");
      console.log(data);
      setTaskList(data);
    })();
  }, []);

  const handleLog = async (task, priority, category) => {
    console.log(task, priority, category);
    const { data } = await api.post("/task-list", { task, priority, category });
    setTaskList((prev) => [...prev, data]);
  };

  const handleDelete = async (id) => {
    await api.delete(`/task-list/${id}`);
    setTaskList((prev) => prev.filter((food) => food.id !== id));
  };

  return {
    taskList,
    handleLog,
    handleDelete
  }
}
