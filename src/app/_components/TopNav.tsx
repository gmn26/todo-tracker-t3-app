import {
  Search,
  Command,
  BellDot,
  MessageSquareDot,
  Plus,
  Slash,
} from "lucide-react";
import Link from "next/link";

const TopNavComponent = () => {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4">
      <div className="flex items-center rounded-xl border p-2">
        <Search />
        <input type="text" placeholder="Search for anything here" />
        <div className="flex gap-2">
          <button className="rounded-xl border p-[10px]">
            <Command />
          </button>
          <button className="rounded-xl border p-[10px]">
            <Slash />
          </button>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="flex h-12 w-12 items-center justify-center rounded-xl border">
          <BellDot />
        </button>
        <button className="flex h-12 w-12 items-center justify-center rounded-xl border">
          <MessageSquareDot />
        </button>
        <Link
          href={"/task/add"}
          className="flex items-center gap-1.5 rounded-xl bg-blue-700 p-2 text-white"
        >
          <Plus /> Create New
        </Link>
      </div>
    </nav>
  );
};

export default TopNavComponent;
