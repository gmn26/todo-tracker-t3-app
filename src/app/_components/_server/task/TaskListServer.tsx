import { api } from "~/trpc/server";
import { Calendar, Clock } from "lucide-react";
import { TimeStampToDate } from "~/utils/ConvertToDate";
import { TimeStampToHour } from "~/utils/ConvertToHour";
import DeleteButton from "../../_client/task/DeleteButton";

export default async function TaskListServer({ status }: { status: string }) {
  const tasks = await api.task.fetchByStatus({ status });

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
