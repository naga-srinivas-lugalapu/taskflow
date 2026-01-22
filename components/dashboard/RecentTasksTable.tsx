const tasks = [
  { id: 1, name: "Design dashboard UI", status: "In Progress", project: "TaskFlow" },
  { id: 2, name: "Setup database schema", status: "Pending", project: "Backend" },
  { id: 3, name: "Implement auth flow", status: "Completed", project: "Core" },
];

export default function RecentTasksTable() {
  return (
    <div className="rounded-2xl bg-white shadow-sm border overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            <th className="px-4 py-3 text-left">Task</th>
            <th className="px-4 py-3 text-left">Project</th>
            <th className="px-4 py-3 text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="border-t">
              <td className="px-4 py-3">{task.name}</td>
              <td className="px-4 py-3">{task.project}</td>
              <td className="px-4 py-3">{task.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
