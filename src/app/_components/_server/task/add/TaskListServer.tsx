"use client";

import { Calendar, Clock, Dot } from "lucide-react";
import { TimeStampToHour } from "~/utils/ConvertToHour";
import { trpc } from "~/utils/trpc";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { TimeStampToDate } from "~/utils/ConvertToDate";

export default function TaskListServer() {
  const { data: tasks, isLoading, isError } = trpc.task.fetchTask.useQuery();

  if (isLoading)
    return (
      <ul className="hide-scroll flex h-full flex-col gap-4 overflow-y-auto text-xs">
        {Array.from({ length: 5 }).map((_, index) => (
          <li
            key={index}
            className="flex h-16 w-full flex-col items-center rounded bg-black/10 p-1"
          >
            <Skeleton width={62} height={20} />
            <div className="flex w-full justify-between">
              <span className="flex items-center gap-1.5">
                <Skeleton width={62} height={12} />
              </span>
              <span className="flex items-center gap-1.5">
                <Skeleton width={62} height={12} />
              </span>
            </div>
          </li>
        ))}
      </ul>
    );
  if (isError) return <div>Error loading tasks</div>;

  return (
    <ul className="hide-scroll flex h-full flex-col gap-4 overflow-y-auto text-xs">
      {tasks?.map((task) => (
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
                <span>{TimeStampToDate(task.createdAt)}</span>
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
