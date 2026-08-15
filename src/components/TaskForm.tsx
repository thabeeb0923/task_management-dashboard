import { useState } from "react";
import type { TaskStatus } from "../types/task";

interface TaskFormProps {
  onAddTask: (
    title: string,
    description: string,
    status: TaskStatus
  ) => void;
}

function TaskForm({ onAddTask }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<TaskStatus>("todo");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!title.trim() || !description.trim()) {
      return;
    }

    onAddTask(title, description, status);

    setTitle("");
    setDescription("");
    setStatus("todo");
  }

  return (
    <form 
    onSubmit={handleSubmit}
    className="mb-6 rounded-lg bg-white p-6 shadow"
    >
      <h2 className="text-xl font-semibold text-gray-900">
        Add New Task
      </h2>

      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Title
        </label>

        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
          placeholder="Enter task title"
        />
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>

        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
          placeholder="Enter task description"
          rows={3}
        />
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Status
        </label>

        <select
          value={status}
          onChange={(event) =>
            setStatus(event.target.value as TaskStatus)
          }
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
        >
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <button
        type="submit"
        className="mt-5 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
      >
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;