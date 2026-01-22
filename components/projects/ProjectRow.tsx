import { Project } from "@/app/lib/mockData";
import StatusBadge from "./StatusBadge";

type ProjectRowProps = {
  project: Project;
};

export default function ProjectRow({ project }: ProjectRowProps) {
  return (
    <tr className="border-b last:border-none hover:bg-gray-50 transition">
      <td className="px-4 py-3 font-medium text-gray-900">
        {project.name}
      </td>
      <td className="px-4 py-3 text-gray-600">
        {project.tasksCount}
      </td>
      <td className="px-4 py-3">
        <StatusBadge status={project.status} />
      </td>
      <td className="px-4 py-3 text-gray-500 text-sm">
        {project.createdAt}
      </td>
    </tr>
  );
}
