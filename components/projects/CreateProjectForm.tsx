"use client";

import { useActionState, useEffect } from "react";
import { createProject } from "@/app/projects/actions";

type ActionState = {
  success: boolean;
  error?: string;
};

const initialState: ActionState = { success: false };

export default function CreateProjectForm({
  onClose,
}: {
  onClose: () => void;
}) {
  const [state, formAction, pending] = useActionState(
    createProject,
    initialState
  );

  useEffect(() => {
    if (state.success) {
      onClose();
    }
  }, [state.success, onClose]);

  return (
    <form action={formAction} className="space-y-4">
      <input
        name="name"
        placeholder="Project name"
        required
        className="w-full border p-2 rounded"
      />

      <textarea
        name="description"
        placeholder="Description"
        className="w-full border p-2 rounded"
      />

      <button
        disabled={pending}
        className="bg-black text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {pending ? "Creating..." : "Create Project"}
      </button>

      {state.error && (
        <p className="text-sm text-red-600">{state.error}</p>
      )}
    </form>
  );
}
