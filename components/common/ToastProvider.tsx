"use client";

import { createContext, useContext, useState } from "react";

type Toast = {
  id: string;
  message: string;
  type?: "success" | "error";
};

const ToastContext = createContext<
  (msg: string, type?: "success" | "error") => void
>(() => {});

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  function showToast(message: string, type: "success" | "error" = "success") {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }

  return (
    <ToastContext.Provider value={showToast}>
      {children}

      <div className="fixed bottom-5 right-5 space-y-2 z-[100]">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`px-4 py-2 rounded-lg shadow text-sm text-white animate-in slide-in-from-bottom
              ${toast.type === "success" ? "bg-green-600" : "bg-red-600"}`}
          >
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
