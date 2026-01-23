import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.project.create({
    data: {
      name: "Welcome to TaskFlow",
      description: "Your first real project",
      tasks: {
        create: [
          { title: "Explore the dashboard" },
          { title: "Create a new project" },
          { title: "Add your first task" }
        ]
      }
    }
  });
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
