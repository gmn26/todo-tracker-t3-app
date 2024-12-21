import { api } from "~/trpc/server";
import RegisteredTaskListClient from "../_client/RegisteredTaskListClient";

export default async function RegisteredTaskListServer() {
  const tasks = await api.task.fetchTask();

  return <RegisteredTaskListClient tasks={tasks} />;
}
