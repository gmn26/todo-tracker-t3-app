import { api } from "~/trpc/server";
import TaskListClient from "../../../_client/task/add/TaskListClient";

export default async function TaskListServer() {
  const tasks = await api.task.fetchTask();

  return <TaskListClient tasks={tasks} />;
}
