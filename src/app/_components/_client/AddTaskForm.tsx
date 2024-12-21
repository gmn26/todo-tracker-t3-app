"use client";

import { useState } from "react";
import { CustomInput } from "./CustomInput";

export default function AddTaskForm() {
  const [formData, setFormData] = useState<Record<string, string>>({
    title: "",
    description: "",
  });

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    return e.target.value;
  };

  return (
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
  );
}
