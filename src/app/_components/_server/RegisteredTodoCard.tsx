import { Calendar, Clock, Dot } from "lucide-react";

export const RegisteredTodoCard = () => {
  return (
    <div className="flex flex-col items-center rounded bg-slate-50 p-1">
      <span className="text-lg font-semibold">Title</span>
      <div className="flex w-full justify-between">
        <span className="flex items-center gap-1.5">
          <Clock size={16} />
          <span>09.00 AM</span>
        </span>
        <span className="flex items-center gap-1.5">
          <Calendar size={16} />
          <span>29 November 2024</span>
        </span>
      </div>
      <span className="flex items-center gap-1.5">
        <span>Status</span>
        <Dot size={40} className="text-green-500" />
      </span>
    </div>
  );
};
