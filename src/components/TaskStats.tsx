interface TaskStatsProps {
  total: number;
  completed: number;
  inProgress: number;
  todo: number;
}

function TaskStats({
  total,
  completed,
  inProgress,
  todo,
}: TaskStatsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-lg bg-white p-5 shadow">
        <p className="text-sm text-gray-500">Total</p>
        <p className="mt-2 text-2xl font-bold">{total}</p>
      </div>

      <div className="rounded-lg bg-white p-5 shadow">
        <p className="text-sm text-gray-500">To Do</p>
        <p className="mt-2 text-2xl font-bold">{todo}</p>
      </div>

      <div className="rounded-lg bg-white p-5 shadow">
        <p className="text-sm text-gray-500">In Progress</p>
        <p className="mt-2 text-2xl font-bold">{inProgress}</p>
      </div>

      <div className="rounded-lg bg-white p-5 shadow">
        <p className="text-sm text-gray-500">Completed</p>
        <p className="mt-2 text-2xl font-bold">{completed}</p>
      </div>
    </div>
  );
}

export default TaskStats;