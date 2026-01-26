import ProjectRow from "./ProjectRow";
import EmptyState from "@/components/common/EmptyState";

type ProjectWithTasks = {
  id: string;
  name: string;
  createdAtFormatted: string;
  tasks: { id: string }[];
  tasksCount: number;
};

type ProjectsTableProps = {
  projects: ProjectWithTasks[];
};

export default function ProjectsTable({ projects }: ProjectsTableProps) {
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
            <th className="px-4 py-3 text-left font-medium">Created</th>
            <th className="px-4 py-3 text-left font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <ProjectRow
              key={project.id}
              project={project} // use server-side formatted field
              tasksCount={project.tasksCount} // already computed in server
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
