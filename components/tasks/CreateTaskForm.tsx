"use client";

import { useState } from "react";

type CreateTaskFormProps = {
  onCreate: (taskName: string) => void;
};

export default function CreateTaskForm({ onCreate }: CreateTaskFormProps) {
  const [name, setName] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;

    onCreate(name);
    setName("");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm text-gray-600 mb-1">
          Task name
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="eg. Design landing page"
          className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex justify-end gap-3 pt-2">
        <button
          type="submit"
          className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Create task
        </button>
      </div>
    </form>
  );
}
