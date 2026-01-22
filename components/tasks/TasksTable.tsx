import { Task } from "@/app/lib/mockData";
import EmptyState from "../common/EmptyState";

type TasksTableProps = {
  tasks: Task[];
};

export default function TasksTable({ tasks }: TasksTableProps) {
  if (tasks.length === 0) {
    return <EmptyState title="No tasks yet" description="Create your first task to start tracking work." />;
  }

  return (
    <div className="bg-white border rounded-2xl shadow-sm overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            <th className="px-4 py-3 text-left font-medium">Task</th>
            <th className="px-4 py-3 text-left font-medium">Project</th>
            <th className="px-4 py-3 text-left font-medium">Status</th>
            <th className="px-4 py-3 text-left font-medium">Created</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="border-t">
              <td className="px-4 py-3">{task.name}</td>
              <td className="px-4 py-3">{task.project}</td>
              <td className="px-4 py-3">{task.status}</td>
              <td className="px-4 py-3">{task.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
