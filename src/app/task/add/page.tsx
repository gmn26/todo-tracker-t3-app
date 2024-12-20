"use client";

import { LayoutDashboard } from "lucide-react";
import { useState } from "react";
import { CustomInput } from "~/app/_components/CustomInput";
import { RegisteredTodoCard } from "~/app/_components/RegisteredTodoCard";
import TopNavComponent from "~/app/_components/TopNav";

export default function AddTask() {
  const [formData, setFormData] = useState<Record<string, string>>({
    title: "",
    description: "",
  });

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    return e.target.value;
  };

  console.table(formData);
  return (
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
        <div className="flex justify-between p-4">
          <div className="w-full">
            <h2>Input your new todo list here!</h2>
            <br />
            <form className="flex flex-col gap-4 pr-12">
              <CustomInput
                placeholder="Title"
                name="title"
                inpVal={formData.title}
                handler={inputHandler}
              />
              <CustomInput
                placeholder="Description"
                name="description"
                inpVal={formData.description}
                handler={inputHandler}
              />
              <button className="w-fit rounded-xl bg-green-500 px-3 py-1.5 text-white">
                Add Task
              </button>
            </form>
          </div>
          <div className="w-1/3 rounded-lg bg-blue-700 p-1">
            <ul className="flex flex-col gap-4 text-xs">
              <li>
                <RegisteredTodoCard />
              </li>
              <li>
                <RegisteredTodoCard />
              </li>
              <li>
                <RegisteredTodoCard />
              </li>
              <li>
                <RegisteredTodoCard />
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
