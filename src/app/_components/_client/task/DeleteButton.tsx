"use client";
import { Trash2 } from "lucide-react";
import { trpc } from "~/utils/trpc";

export default function DeleteButton({ idTask }: { idTask: string }) {
  const deleteHandler = (id: string) => {
    deleteTaskMutation.mutate({ id });
  };

  const deleteTaskMutation = trpc.task.deleteById.useMutation({
    onSuccess: () => {
      alert(`Task deleted successfully!`);
    },
    onError: (error) => {
      console.error("Failed to delete task:", error.message);
    },
  });
  return (
    <button className="invisible group-hover:visible">
      <Trash2 color="red" width={20} onClick={() => deleteHandler(idTask)} />
    </button>
  );
}
