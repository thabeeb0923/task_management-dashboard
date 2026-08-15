import type { Task } from "../types/task";

interface TaskCardProps {
  task: Task;
}

function TaskCard({ task }: TaskCardProps) {
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
    </div>
  );
}

export default TaskCard;