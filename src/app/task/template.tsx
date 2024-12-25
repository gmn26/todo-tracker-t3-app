import {
  Bell,
  CircleUser,
  House,
  MessageCircleMore,
  NotebookTabs,
  SquareCheck,
  Target,
} from "lucide-react";
import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const containerGrid = "grid-cols-8 grid-rows-8";
  const gridChildClass =
    "odd:col-span-1 even:col-span-7 [&:nth-child(1)]:row-span-1 [&:nth-child(2)]:row-span-1 [&:nth-child(3)]:row-span-7 [&:nth-child(4)]:row-span-7";

  return (
    <>
      <div className={`group grid h-screen ${containerGrid}`}>
        <h2
          className={`flex items-center gap-2 border px-2 text-2xl font-bold ${gridChildClass}`}
        >
          <NotebookTabs color="blue" />
          Note
        </h2>
        {/* <TopNavComponent /> */}
        <nav
          className={`flex items-stretch justify-between border px-8 ${gridChildClass}`}
        >
          <ul className="flex gap-4 *:flex *:items-center *:font-medium">
            <li className="border-b-2 border-blue-700 px-2">List</li>
            <li>Board</li>
            <li>Calender</li>
          </ul>
          <div className="flex items-center gap-3">
            <MessageCircleMore />
            <Bell />
            <CircleUser />
          </div>
        </nav>
        <div
          className={`flex flex-col border-r text-slate-500 ${gridChildClass}`}
        >
          <ul className="flex flex-col gap-5 border-b px-3 py-8 *:*:flex *:*:items-center *:*:gap-2">
            <li>
              <Link href={"/task"}>
                <House size={16} /> Home
              </Link>
            </li>
            <li>
              <Link href={"/task"}>
                <SquareCheck size={16} /> My Tasks
              </Link>
            </li>
            <li>
              <Link href={"/task"}>
                <Target size={18} />
                Goals
              </Link>
            </li>
          </ul>
          <div className="flex h-full flex-col justify-between px-3 py-5">
            <div>WORKSPACE</div>
            <div>Light Mode</div>
          </div>
        </div>
        <main className={gridChildClass}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
