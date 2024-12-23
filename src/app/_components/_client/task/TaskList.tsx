"use client";

import { Calendar, Clock } from "lucide-react";
import { TimeStampToHour } from "~/utils/ConvertToHour";

type Task = {
  id: string;
  title: string;
  description: string | null;
  status: string;
  createdAt: Date;
  userId: string | null;
};

export default function TaskListClient({ tasks }: { tasks: Task[] }) {
  return (
    <ul className="flex flex-col gap-4 text-xs">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex justify-between rounded border bg-slate-50 p-2 *:w-full"
        >
          {/* Left */}
          <div className="flex gap-2">
            <div className="w-[2px] bg-green-500"></div>
            <div className="flex flex-col">
              <span className="font-semibold">{task.title}</span>
              <span className="text-xs text-gray-400">{task.description}</span>
            </div>
          </div>
          {/* Left */}
          {/* Right */}
          <div className="flex items-center *:w-full">
            <div className="flex items-center gap-1.5">
              <Clock size={16} />
              <span>{TimeStampToHour(task.createdAt)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar size={16} />
              <span>29 November 2024</span>
            </div>
          </div>
          {/* Right */}
        </div>
      ))}
    </ul>
  );
}
