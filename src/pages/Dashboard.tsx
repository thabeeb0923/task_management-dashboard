import { useState } from "react";
import type { Task } from "../types/task";
import TaskList from "../components/TaskList";
import TaskStats from "../components/TaskStats";
import TaskForm from "../components/TaskForm";
import TaskFilters from "../components/TaskFilters";
function Dashboard() {
  //const tasks: Task[] = [
    const [tasks, setTasks] = useState<Task[]>([
  {
      id: 1,
      title: "Prepare for interview",
      description: "Practice React and TypeScript",
      status: "in-progress",
    },
    {
      id: 2,
      title: "Learn TanStack Query",
      description: "Practice useQuery and useMutation",
      status: "todo",
    },
    {
      id: 3,
      title: "Build dashboard",
      description: "Create the task management UI",
      status: "completed",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
const [statusFilter, setStatusFilter] =
  useState<Task["status"] | "all">("all");
const total = tasks.length;

const completed = tasks.filter(
  (task) => task.status === "completed"
).length;

const inProgress = tasks.filter(
  (task) => task.status === "in-progress"
).length;

const todo = tasks.filter(
  (task) => task.status === "todo"
).length;

const filteredTasks = tasks.filter((task) => {
  const matchesSearch =
    task.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) ||
    task.description
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

  const matchesStatus =
    statusFilter === "all" ||
    task.status === statusFilter;

  return matchesSearch && matchesStatus;
});
function handleAddTask(
  title: string,
  description: string,
  status: Task["status"]
) {
  const newTask: Task = {
    id: Date.now(),
    title,
    description,
    status,
  };

  setTasks((currentTasks) => [
    ...currentTasks,
    newTask,
  ]);
}
 return (
  <div className="min-h-screen bg-gray-100">
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Task Management Dashboard
          </h1>

          <p className="text-sm text-gray-500">
            Manage your tasks efficiently
          </p>
        </div>

        <button className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
          Add Task
        </button>
      </div>
    </header>

<main className="mx-auto max-w-6xl px-6 py-8">
<TaskStats
  total={total}
  completed={completed}
  inProgress={inProgress}
  todo={todo}
/>

<TaskForm onAddTask={handleAddTask} />

<TaskFilters
  searchTerm={searchTerm}
  statusFilter={statusFilter}
  onSearchChange={setSearchTerm}
  onStatusChange={setStatusFilter}
/>

<TaskList tasks={filteredTasks} />
</main>
  </div>
);
}
export default Dashboard;