import TopNavComponent from "../_components/TopNav";

export default function Task() {
  return (
    <>
      <div className="flex h-screen">
        <aside className="w-1/6 bg-slate-300 p-2">
          <h2 className="font-semibol8 mb-8">TODO TRACKER APP</h2>
          <ul className="flex flex-col gap-1.5">
            <li>Dashboard</li>
            <li>Time</li>
          </ul>
        </aside>
        <main className="w-full">
          <TopNavComponent />
        </main>
      </div>
      <footer className="fixed bottom-0 left-0 right-0 bg-gray-500 py-3 text-center">
        Copyright @Ghazy Muhari Novrial, 2024
      </footer>
    </>
  );
}
