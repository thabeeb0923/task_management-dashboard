import { useState } from "react";
import type { Task, TaskStatus } from "../types/task";

interface EditTaskFormProps {
  task: Task;
  onSave: (task: Task) => void;
  onCancel: () => void;
}

function EditTaskForm({
  task,
  onSave,
  onCancel,
}: EditTaskFormProps) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] =
    useState(task.description);

  const [status, setStatus] =
    useState<TaskStatus>(task.status);

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!title.trim() || !description.trim()) {
      return;
    }

    onSave({
      ...task,
      title,
      description,
      status,
    });
  }

  return (
   <form
  onSubmit={handleSubmit}
  className="mb-6 rounded-lg bg-white p-6 shadow"
>
      <h2 className="text-xl font-semibold text-gray-900">
        Edit Task
      </h2>

      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Title
        </label>

        <input
          type="text"
          value={title}
          onChange={(event) =>
            setTitle(event.target.value)
          }
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
        />
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>

        <textarea
          value={description}
          onChange={(event) =>
            setDescription(event.target.value)
          }
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
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
            setStatus(
              event.target.value as TaskStatus
            )
          }
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
        >
          <option value="todo">To Do</option>
          <option value="in-progress">
            In Progress
          </option>
          <option value="completed">
            Completed
          </option>
        </select>
      </div>

      <div className="mt-5 flex gap-3">
        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
        >
          Save Changes
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="rounded-lg bg-gray-200 px-4 py-2 font-medium text-gray-700 hover:bg-gray-300"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default EditTaskForm;