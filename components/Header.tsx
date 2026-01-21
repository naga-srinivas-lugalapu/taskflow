"use client";
import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      {/* Left: Page title */}
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>

      {/* Right: User info + notifications */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <button className="relative p-2 rounded hover:bg-gray-100">
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
          🔔
        </button>

        {/* User avatar + name */}
        <div className="flex items-center space-x-2">
         <span className="text-gray-700 font-medium">Naga Srinivas</span>
        </div>
      </div>
    </header>
  );
}
