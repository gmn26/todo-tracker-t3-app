import Link from "next/link";
import { CirclePlus } from "lucide-react";
import TaskListServer from "../_components/_server/task/TaskListServer";
import { api } from "~/trpc/server";

export default async function Task() {
  const onGoing = api.task.countByStatus({ status: "On Going" });
  const complete = api.task.countByStatus({ status: "Complete" });

  return (
    <>
      <span>Keterangan warna due date</span>
      <div className="grid grid-cols-2 gap-x-6 p-3">
        {/* First Grid Col */}
        <div>
          {/* Grid Title */}
          <div className="border-b-2 border-b-yellow-400">
            <span className="flex items-center gap-3 pb-2">
              On Going{" "}
              <span className="flex w-8 items-center justify-center rounded-full border border-slate-300 text-sm text-slate-300">
                {onGoing}
              </span>
            </span>
          </div>
          {/* Grid Title */}
          {/* Card Grid */}
          <TaskListServer status="On Going" />
          {/* Card Grid */}
        </div>
        {/* First Grid Col */}
        {/* Second Grid Col */}
        <div>
          {/* Grid Title */}
          <div className="border-b-2 border-b-green-600">
            <span className="flex items-center gap-3 pb-2">
              Complete{" "}
              <span className="flex w-8 items-center justify-center rounded-full border border-slate-300 text-sm text-slate-300">
                {complete}
              </span>
            </span>
          </div>
          {/* Grid Title */}
          {/* Card Grid */}
          <TaskListServer status="Complete" />
          {/* Card Grid */}
        </div>
        {/* Second Grid Col */}
      </div>
      {/* Add Task Button */}
      <Link
        href={"/task/add"}
        className="absolute bottom-4 right-4 flex gap-2 rounded-full bg-[#306BFF] px-3 py-2 text-white"
      >
        <CirclePlus />
        New Task
      </Link>
      {/* Add Task Button */}
    </>
  );
}
