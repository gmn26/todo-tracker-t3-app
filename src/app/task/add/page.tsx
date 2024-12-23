import { LayoutDashboard } from "lucide-react";
import AddTaskForm from "~/app/_components/_client/AddTaskForm";
import TaskListServer from "~/app/_components/_server/task/add/TaskListServer";
import TopNavComponent from "~/app/_components/_server/TopNav";

export default function AddTask() {
  return (
    <div className="flex h-screen">
      <aside className="w-1/6 bg-slate-300 p-2">
        <h2 className="font-semibol8 mb-8">TODO TRACKER APP</h2>
        <ul className="flex flex-col gap-1.5 *:flex *:items-center *:gap-2">
          <li>
            <LayoutDashboard size={16} /> Dashboard
          </li>
        </ul>
      </aside>
      <main className="w-full">
        <TopNavComponent />
        <div className="flex justify-between p-4">
          <div className="w-full">
            <h2>Input your new todo list here!</h2>
            <br />
            <AddTaskForm />
          </div>
          <div className="w-1/3 rounded-lg bg-blue-700 p-1">
            <TaskListServer />
          </div>
        </div>
      </main>
    </div>
  );
}
