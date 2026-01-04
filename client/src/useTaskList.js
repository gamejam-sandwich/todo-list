import { useState, useEffect } from "react";
import api from "./api.js";

export default function useTaskList() {
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

  return {
    taskList,
    handleLog,
    handleDelete
  }
}
