import React from "react";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">TaskFlow</h2>
      <ul>
        <li className="mb-2 hover:bg-gray-700 p-2 rounded cursor-pointer">Dashboard</li>
        <li className="mb-2 hover:bg-gray-700 p-2 rounded cursor-pointer">Projects</li>
        <li className="mb-2 hover:bg-gray-700 p-2 rounded cursor-pointer">Settings</li>
      </ul>
    </div>
  );
}
