import ListItemComponent from "../_components/ListItem";
import TopNavComponent from "../_components/TopNav";
import { LayoutDashboard, Hourglass, BookCheck } from "lucide-react";

export default function Task() {
  return (
    <>
      <div className="flex h-screen">
        <aside className="w-1/6 bg-slate-300 p-2">
          <h2 className="font-semibol8 mb-8">TODO TRACKER APP</h2>
          <ul className="flex flex-col gap-1.5 *:flex *:items-center *:gap-2">
            <li>
              <LayoutDashboard size={16} /> Dashboard
            </li>
          </ul>
        </aside>
        <main className="w-full">
          <TopNavComponent />
          {/* Tab */}
          <div className="flex gap-5 p-4">
            <button className="flex items-center gap-2 border-b-2 border-b-yellow-400 p-1.5 px-5">
              <Hourglass size={16} /> On Going
            </button>
            <button className="flex items-center gap-2 border-b-2 border-b-green-400 p-1.5 px-5">
              <BookCheck size={16} /> Finished
            </button>
          </div>
          {/* Tab */}
          {/* List Container */}
          <div className="m-4 flex flex-col gap-1 rounded-xl bg-slate-200 p-2">
            <h3 className="m-2 font-semibold">Nov 29, 2024</h3>
            <ListItemComponent />
            <ListItemComponent />
          </div>
          {/* List Container */}
        </main>
      </div>
      {/* <footer className="fixed bottom-0 left-0 right-0 bg-gray-500 py-3 text-center">
        Copyright @Ghazy Muhari Novrial, 2024
      </footer> */}
    </>
  );
}
