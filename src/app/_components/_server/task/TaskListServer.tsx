import { api } from "~/trpc/server";
import TaskListClient from "../../_client/task/TaskListClient";

export default async function TaskListServer({ status }: { status: string }) {
  const tasks = await api.task.fetchByStatus({ status });

  return <TaskListClient tasks={tasks} />;
}
