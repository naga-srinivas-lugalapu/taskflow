import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function POST(req: NextRequest) {
  const { name } = await req.json();

  const project = await prisma.project.create({
    data: { name },
  });

  return NextResponse.json(project);
}
