import { Project, Task } from "@/app/lib/mockData";
import ProjectRow from "./ProjectRow";
import EmptyState from "../common/EmptyState";

type ProjectsTableProps = {
  projects: Project[];
  tasks: Task[];
};

export default function ProjectsTable({ projects, tasks }: ProjectsTableProps) {
  if (projects.length === 0) {
    return (
      <EmptyState
        title="No projects yet"
        description="Create your first project to start organizing your work."
      />
    );
  }

  return (
    <div className="bg-white border rounded-2xl shadow-sm overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            <th className="px-4 py-3 text-left font-medium">Project</th>
            <th className="px-4 py-3 text-left font-medium">Tasks</th>
            <th className="px-4 py-3 text-left font-medium">Status</th>
            <th className="px-4 py-3 text-left font-medium">Created</th>
          </tr>
        </thead>

        <tbody>
          {projects.map((project) => (
            <ProjectRow
              key={project.id}
              project={project}
              tasksCount={tasks.filter((t) => t.project === project.name).length}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
