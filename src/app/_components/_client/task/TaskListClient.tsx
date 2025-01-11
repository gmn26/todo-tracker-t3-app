import { Calendar, Clock } from "lucide-react";
import { TimeStampToDate } from "~/utils/ConvertToDate";
import { TimeStampToHour } from "~/utils/ConvertToHour";

type Task = {
  id: string;
  title: string;
  description: string | null;
  status: string;
  dueDate: Date;
  createdAt: Date;
  userId: string | null;
};

export default function TaskListClient({ tasks }: { tasks: Task[] | null }) {
  return (
    <div className="grid grid-cols-2 gap-4 py-3">
      {tasks?.map((task, index) => (
        <div
          key={index}
          className="flex flex-col gap-3 rounded-xl border border-slate-300 p-4 shadow"
        >
          <span className="font-semibold">{task.title}</span>
          <p className="grow text-sm text-slate-400">{task.description}</p>
          <div className="flex justify-between border-t-2 pt-3 *:flex *:items-center *:gap-1 *:text-xs">
            <span>
              <Clock size={14} /> {TimeStampToHour(task.createdAt)}
            </span>
            <span>
              <Calendar size={14} />
              {TimeStampToDate(task.dueDate)}
              {/* {task.createdAt.toString()} */}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
