"use client";

import { useState } from "react";
import PageContainer from "../../components/layout/PageContainer";
import ProjectsTable from "../../components/projects/ProjectsTable";
import Modal from "../../components/common/Modal";
import CreateProjectForm from "../../components/projects/CreateProjectForm";
import { Project, Task, projects as mockProjects, tasks as mockTasks } from "../lib/mockData";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(mockProjects);
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [isOpen, setIsOpen] = useState(false);

  function handleCreateProject(name: string) {
    const newProject: Project = {
      id: crypto.randomUUID(),
      name,
      status: "active",
      createdAt: new Date().toISOString().split("T")[0],
    };

    setProjects((prev) => [newProject, ...prev]);
    setIsOpen(false);
  }

  return (
    <PageContainer
      title="Projects"
      rightSlot={
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          + Create Project
        </button>
      }
    >
      <ProjectsTable projects={projects} tasks={tasks} />

      <Modal title="Create Project" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <CreateProjectForm onCreate={handleCreateProject} />
      </Modal>
    </PageContainer>
  );
}
