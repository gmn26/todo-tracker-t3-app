"use client";

import { useState } from "react";
import { CustomInput } from "./CustomInput";
import { trpc } from "~/utils/trpc";

export default function AddTaskForm() {
  const [formData, setFormData] = useState<Record<string, string>>({
    title: "",
    description: "",
    dueDate: "",
  });

  const inputHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTaskMutation.mutate({
      title: formData.title ?? "",
      description: formData.description ?? "",
      dueDate: new Date(formData.dueDate ?? "") ?? "",
    });
  };

  const addTaskMutation = trpc.task.addTask.useMutation({
    onSuccess: (formData) => {
      alert(`Task "${formData.title}" added successfully!`);
      setFormData({
        title: "",
        description: "",
        dueDate: "",
      });
    },
    onError: (error) => {
      console.error("Failed to add task:", error.message);
    },
  });

  return (
    <form className="flex flex-col gap-4 pr-12" onSubmit={submitHandler}>
      <CustomInput
        placeholder="Title"
        name="title"
        inpVal={formData.title}
        handler={inputHandler}
        require={true}
      />
      <CustomInput
        placeholder="Description"
        name="description"
        inpVal={formData.description}
        handler={inputHandler}
        require={false}
      />
      <input
        className="w-full rounded-lg border bg-transparent p-2"
        onChange={inputHandler}
        type="datetime-local"
        name="dueDate"
        required
      />
      <button className="w-fit rounded-xl bg-green-500 px-3 py-1.5 text-white">
        Add Task
      </button>
    </form>
  );
}
