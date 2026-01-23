import ProjectRow from "./ProjectRow";
import EmptyState from "@/components/common/EmptyState";

type ProjectWithTasks = {
  id: string;
  name: string;
  createdAt: Date;
  tasks: { id: string }[];
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
              project={{
                      ...project,
                       createdAt: project.createdAt instanceof Date
                       ? project.createdAt.toISOString()
                       : project.createdAt, // already string// serialize Date to string
                       }}
              tasksCount={project.tasks.length}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
