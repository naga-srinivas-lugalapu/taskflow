"use client";

import { useTransition } from "react";
import { deleteProject } from "@/app/projects/actions";

type ProjectRowProps = {
  project: {
    id: string;
    name: string;
    createdAtFormatted: string;
    tasks: { id: string }[];
  };
  tasksCount: number;
};

export default function ProjectRow({ project, tasksCount }: ProjectRowProps) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    const ok = confirm(`Delete "${project.name}"?`);
    if (!ok) return;

    startTransition(async () => {
      await deleteProject(project.id);
    });
  }

  return (
    <tr className="border-t">
      <td className="px-4 py-3">{project.name}</td>
      <td className="px-4 py-3">{tasksCount}</td>
      <td className="px-4 py-3">{project.createdAtFormatted}</td>
      <td className="px-4 py-3">
        <button
          onClick={handleDelete}
          disabled={isPending}
          className="text-red-600 hover:underline text-sm disabled:opacity-50"
        >
          {isPending ? "Deleting..." : "Delete"}
        </button>
      </td>
    </tr>
  );
}
