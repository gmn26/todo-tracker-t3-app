"use client";
import { Trash2 } from "lucide-react";
import { trpc } from "~/utils/trpc";

export default function DeleteButton({ idTask }: { idTask: string }) {
  const trpcUtils = trpc.useContext();

  const deleteHandler = (id: string) => {
    deleteTaskMutation.mutate({ id });
  };

  const deleteTaskMutation = trpc.task.deleteById.useMutation({
    onSuccess: async () => {
      alert(`Task deleted successfully!`);
      try {
        await trpcUtils.task.fetchByStatus.invalidate();
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error(
            "Failed to invalidate task fetch query:",
            error.message,
          );
        } else {
          console.error("An unknown error occurred during invalidation.");
        }
      }
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
