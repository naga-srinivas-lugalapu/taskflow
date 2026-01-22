import { Project } from "@/app/lib/mockData";

type ProjectRowProps = {
  project: Project;
  tasksCount: number;
};

export default function ProjectRow({ project, tasksCount }: ProjectRowProps) {
  return (
    <tr className="border-t">
      <td className="px-4 py-3">{project.name}</td>
      <td className="px-4 py-3">{tasksCount}</td>
      <td className="px-4 py-3">{project.status}</td>
      <td className="px-4 py-3">{project.createdAt}</td>
    </tr>
  );
}
