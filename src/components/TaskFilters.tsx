import type { TaskStatus } from "../types/task";

interface TaskFiltersProps {
  searchTerm: string;
  statusFilter: TaskStatus | "all";
  onSearchChange: (value: string) => void;
  onStatusChange: (value: TaskStatus | "all") => void;
}

function TaskFilters({
  searchTerm,
  statusFilter,
  onSearchChange,
  onStatusChange,
}: TaskFiltersProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 rounded-lg bg-white p-4 shadow sm:flex-row">
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search tasks..."
        className="flex-1 rounded-lg border border-gray-300 px-3 py-2"
      />

      <select
        value={statusFilter}
        onChange={(event) =>
          onStatusChange(
            event.target.value as TaskStatus | "all"
          )
        }
        className="rounded-lg border border-gray-300 px-3 py-2"
      >
        <option value="all">All Statuses</option>
        <option value="todo">To Do</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
}

export default TaskFilters;