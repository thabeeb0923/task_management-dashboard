import type { Task } from "../types/task";
import TaskCard from "./TaskCard";

interface TaskListProps {
  tasks: Task[];
}

function TaskList({ tasks }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="rounded-lg bg-white p-8 text-center shadow">
        <h2 className="text-lg font-semibold text-gray-900">
          No tasks found
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Try changing your search or filter.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6 grid gap-4">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;