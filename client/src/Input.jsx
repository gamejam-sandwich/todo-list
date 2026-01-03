import { useRef, useState } from "react";

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
      <div>
        <input ref={taskRef} name="task" placeholder="Ex: Read chapter 20" />
        <select ref={priorityRef} name="priority">
          <option value="3">Urgent</option>
          <option value="2">High</option>
          <option value="1">Normal</option>
          <option value="0">Low</option>
        </select>
        <button type="submit">Submit</button>
      </div>
      <div>{error}</div>
    </form>
  );
}
