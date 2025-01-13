"use client";

import { Calendar, Clock } from "lucide-react";
import { TimeStampToDate } from "~/utils/ConvertToDate";
import { TimeStampToHour } from "~/utils/ConvertToHour";
import DeleteButton from "../../_client/task/DeleteButton";
import { trpc } from "~/utils/trpc";

export default function TaskListServer({ status }: { status: string }) {
  const {
    data: tasks,
    isLoading,
    isError,
  } = trpc.task.fetchByStatus.useQuery({ status });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error loading tasks</div>;

  return (
    <div className="grid grid-cols-2 gap-4 py-3">
      {tasks?.map((task, index) => (
        <div
          key={index}
          className="group flex flex-col gap-3 rounded-xl border border-slate-300 p-4 shadow"
        >
          <div className="flex justify-between">
            <span className="font-semibold">{task.title}</span>
            <DeleteButton idTask={task.id} />
          </div>
          <p className="grow text-sm text-slate-400">{task.description}</p>
          <div className="flex justify-between border-t-2 pt-3 *:flex *:items-center *:gap-1 *:text-xs">
            <span>
              <Clock size={14} /> {TimeStampToHour(task.createdAt)}
            </span>
            <span>
              <Calendar size={14} />
              {TimeStampToDate(task.dueDate)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
