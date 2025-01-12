import { Calendar, Clock, Dot } from "lucide-react";
import { api } from "~/trpc/server";
import { TimeStampToHour } from "~/utils/ConvertToHour";

export default async function TaskListServer() {
  const tasks = await api.task.fetchTask();

  return (
    <ul className="flex flex-col gap-4 text-xs">
      {tasks.map((task) => (
        <li key={task.id}>
          <div className="flex flex-col items-center rounded bg-slate-50 p-1">
            <span className="text-lg font-semibold">{task.title}</span>
            <div className="flex w-full justify-between">
              <span className="flex items-center gap-1.5">
                <Clock size={16} />
                <span>{TimeStampToHour(task.createdAt)}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={16} />
                <span>29 November 2024</span>
              </span>
            </div>
            <span className="flex items-center gap-1.5">
              <span>Status</span>
              <Dot
                size={40}
                className={
                  task.status != "On Going"
                    ? "text-green-500"
                    : "text-yellow-500"
                }
              />
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
