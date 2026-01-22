export type Project = {
  id: string;
  name: string;
  status: "active" | "completed" | "on_hold";
  tasksCount: number;
  createdAt: string;
};

export const projects: Project[] = [
  {
    id: "p1",
    name: "TaskFlow Dashboard",
    status: "active",
    tasksCount: 12,
    createdAt: "2026-01-10",
  },
  {
    id: "p2",
    name: "Marketing Website",
    status: "completed",
    tasksCount: 8,
    createdAt: "2025-12-18",
  },
  {
    id: "p3",
    name: "Mobile App MVP",
    status: "on_hold",
    tasksCount: 5,
    createdAt: "2026-01-05",
  },
];
