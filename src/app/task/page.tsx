import TaskListServer from "../_components/_server/task/TaskListServer";
import { Hourglass, BookCheck } from "lucide-react";

export default async function Task() {
  return (
    <>
      {/* Tab */}
      <div className="flex gap-5 p-4">
        <button className="flex items-center gap-2 border-b-2 border-b-yellow-400 p-1.5 px-5">
          <Hourglass size={16} /> On Going
        </button>
        <button className="flex items-center gap-2 border-b-2 border-b-green-400 p-1.5 px-5">
          <BookCheck size={16} /> Finished
        </button>
      </div>
      {/* Tab */}
      {/* List Container */}
      <div className="m-4 flex flex-col gap-1 rounded-xl bg-slate-200 p-2">
        <h3 className="m-2 font-semibold">Nov 29, 2024</h3>
        <TaskListServer />
      </div>
      {/* List Container */}
    </>
  );
}
