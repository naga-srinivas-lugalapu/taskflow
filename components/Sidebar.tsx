"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  const menus = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Projects", href: "/projects" },
    { label: "Tasks", href: "/tasks" },
    { label: "Settings", href: "/settings" }, // later
  ];

  return (
    <div
      className={`bg-gray-900 text-white h-screen p-4 transition-all ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      <div className="flex justify-between items-center mb-6">
        {isOpen && <h2 className="text-xl font-bold">TaskFlow</h2>}
        <button onClick={() => setIsOpen(!isOpen)}>☰</button>
      </div>

      <ul className="space-y-2">
        {menus.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block p-2 rounded cursor-pointer transition ${
                  isActive ? "bg-blue-600" : "hover:bg-gray-700"
                }`}
              >
                {isOpen ? item.label : item.label[0]}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
