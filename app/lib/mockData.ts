export type Project = {
  id: string;
  name: string;
  status: "active" | "completed" | "on_hold";
  createdAt: string;
};

export type Task = {
  id: string;
  name: string;
  project: string; // links to Project.name
  status: "pending" | "in_progress" | "done";
  createdAt: string;
};

export const projects: Project[] = [
  { id: "p1", name: "TaskFlow Dashboard", status: "active", createdAt: "2026-01-10" },
  { id: "p2", name: "Marketing Website", status: "completed", createdAt: "2025-12-18" },
  { id: "p3", name: "Mobile App MVP", status: "on_hold", createdAt: "2026-01-05" },
];

export const tasks: Task[] = [
  { id: "t1", name: "Design landing page", project: "TaskFlow Dashboard", status: "pending", createdAt: "2026-01-12" },
  { id: "t2", name: "Set up analytics", project: "Marketing Website", status: "in_progress", createdAt: "2025-12-20" },
  { id: "t3", name: "Build login screen", project: "Mobile App MVP", status: "done", createdAt: "2026-01-06" },
];
