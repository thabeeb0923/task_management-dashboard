import type { Task } from "../types/task";

interface TaskCardProps {
  task: Task;
  onDeleteTask: (id: number) => void;
  onEditTask: (task: Task) => void;

}

function TaskCard({ task,  onDeleteTask, onEditTask, }: TaskCardProps) {
  return (
    <div className="rounded-lg bg-white p-5 shadow">
      <h2 className="text-xl font-semibold text-gray-900">
        {task.title}
      </h2>

      <p className="mt-2 text-gray-600">
        {task.description}
      </p>

      <p className="mt-4 text-sm font-medium text-gray-500">
        Status: {task.status}
      </p>
      <button
  type="button"
  onClick={() => onDeleteTask(task.id)}
  className="rounded-lg bg-red-100 px-3 py-2 text-sm font-medium text-red-700 hover:bg-red-200"
>
  Delete
</button>

<button
  type="button"
  onClick={() => onEditTask(task)}
  className="rounded-lg bg-blue-100 px-3 py-2 text-sm font-medium text-blue-700 hover:bg-blue-200"
>
  Edit
</button>

    </div>
  );
}

export default TaskCard;