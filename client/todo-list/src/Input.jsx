import { useRef, useState } from "react";

export default function Input(props) {
  const taskRef = useRef(null);
  const priorityRef = useRef(null);
  const [error, setError] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const task = Object.fromEntries(new FormData(ev.target));

    setError("");
    const name = task.name.trim();
    if (!name) {
      setError("Task cannot be blank.");
      taskRef.current.focus();
      return;
    }

    const priority = task.priority;
    taskRef.current.value = "";
    priorityRef.current.value = "Urgent";
    taskRef.current.focus();
    props.onLog(name, priority);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input name="task" placeholder="Ex: Read chapter 20" />
        <select name="priority">
          <option value="Urgent">Urgent</option>
          <option value="High">High</option>
          <option value="Normal">Normal</option>
          <option value="Low">Low</option>
        </select>
        <button type="submit">Submit</button>
      </div>
      <div>{error}</div>
    </form>
  );
}
