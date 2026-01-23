"use client";

import { useEffect, useRef, useState } from "react";
import CreateProjectForm from "./CreateProjectForm";

export default function CreateProjectButton() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // lock scroll
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [open]);

  // Close on outside click
  function handleBackdropClick(e: React.MouseEvent<HTMLDivElement>) {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-black text-white rounded-lg"
      >
        + Create Project
      </button>

      {open && (
        <div
          onMouseDown={handleBackdropClick}
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4"
        >
          <div
            ref={modalRef}
            className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6 animate-in fade-in zoom-in"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Create project</h2>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-black text-xl leading-none"
              >
                ×
              </button>
            </div>

            <CreateProjectForm onClose={() => setOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}
