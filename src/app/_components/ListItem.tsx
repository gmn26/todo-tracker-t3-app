import { Clock, Calendar } from "lucide-react";

const ListItemComponent = () => {
  return (
    <div className="flex justify-between rounded border bg-slate-50 p-2 *:w-full">
      {/* Left */}
      <div className="flex gap-2">
        <div className="w-[2px] bg-green-500"></div>
        <div className="flex flex-col">
          <span className="font-semibold">Judul</span>
          <span className="text-xs text-gray-400">Deskripsi</span>
        </div>
      </div>
      {/* Left */}
      {/* Right */}
      <div className="flex items-center *:w-full">
        <div className="flex items-center gap-1.5">
          <Clock size={16} />
          <span>09.00 AM</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Calendar size={16} />
          <span>29 November 2024</span>
        </div>
      </div>
      {/* Right */}
    </div>
  );
};

export default ListItemComponent;
