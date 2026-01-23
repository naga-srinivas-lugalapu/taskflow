import PageContainer from "@/components/layout/PageContainer";
import ProjectsTable from "./ProjectsTable";
import CreateProjectButton from "@/components/projects/CreateProjectButton";
import { prisma } from "@/app/lib/prisma";

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({
    include: { tasks: true },
    orderBy: { createdAt: "desc" },
  });

  // Create hydration-safe view model
  const safeProjects = projects.map((p) => ({
    id: p.id,
    name: p.name,
    tasks: p.tasks,
    tasksCount: p.tasks.length,
    createdAtFormatted: p.createdAt.toISOString().split("T")[0], // YYYY-MM-DD
  }));

  return (
    <PageContainer title="Projects" rightSlot={<CreateProjectButton />}>
      <ProjectsTable projects={safeProjects} />
    </PageContainer>
  );
}
