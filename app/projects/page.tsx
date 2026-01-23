import PageContainer from "@/components/layout/PageContainer";
import ProjectsTable from "./ProjectsTable";
import CreateProjectButton from "@/components/projects/CreateProjectButton";
import { prisma } from "@/app/lib/prisma";

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({
    include: { tasks: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <PageContainer
      title="Projects"
      rightSlot={<CreateProjectButton />}
    >
      <ProjectsTable projects={projects} />
    </PageContainer>
  );
}
