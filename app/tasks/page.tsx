"use client";

import { useState } from "react";
import PageContainer from "../../components/layout/PageContainer";
import TasksTable from "../../components/tasks/TasksTable";
import Modal from "../../components/common/Modal";
import CreateTaskForm from "../../components/tasks/CreateTaskForm";
import { Task, tasks as mockTasks } from "../lib/mockData";

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [isOpen, setIsOpen] = useState(false);

  function handleCreateTask(taskName: string, projectName?: string) {
    const newTask: Task = {
      id: crypto.randomUUID(),
      name: taskName,
      project: projectName || "Unassigned",
      status: "pending",
      createdAt: new Date().toISOString().split("T")[0],
    };

    setTasks((prev) => [newTask, ...prev]);
    setIsOpen(false);
  }

  return (
    <PageContainer
      title="Tasks"
      rightSlot={
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          + Create Task
        </button>
      }
    >
      <TasksTable tasks={tasks} />

      <Modal title="Create Task" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <CreateTaskForm onCreate={handleCreateTask} />
      </Modal>
    </PageContainer>
  );
}
