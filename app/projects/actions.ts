"use server";

import { prisma } from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";

type ActionState = {
  success: boolean;
  error?: string;
};

export async function createProject(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;

    if (!name || name.trim().length === 0) {
      return { success: false, error: "Project name is required" };
    }

    await prisma.project.create({
      data: {
        name,
        description,
      },
    });

    revalidatePath("/projects");

    return { success: true };
  } catch (err) {
    console.error(err);
    return { success: false, error: "Failed to create project" };
  }
}


export async function deleteProject(projectId: string) {
  try {
    await prisma.project.delete({
      where: { id: projectId },
    });

    revalidatePath("/projects");
  } catch (err) {
    console.error(err);
    throw new Error("Failed to delete project");
  }
}
