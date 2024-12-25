import AddTaskForm from "~/app/_components/_client/AddTaskForm";
import TaskListServer from "~/app/_components/_server/task/add/TaskListServer";

export default function AddTask() {
  return (
    <>
      <div className="flex justify-between p-4">
        <div className="w-full">
          <h2>Input your new todo list here!</h2>
          <br />
          <AddTaskForm />
        </div>
        <div className="w-1/3 rounded-lg bg-blue-700 p-1">
          <TaskListServer />
        </div>
      </div>
    </>
  );
}
