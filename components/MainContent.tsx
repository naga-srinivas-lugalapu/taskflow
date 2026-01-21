"use client";
import React from "react";

export default function MainContent() {
  return (
    <main className="p-6 bg-gray-50 flex-1 overflow-auto">
      {/* Welcome message */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Welcome back, Naga!</h2>
        <p className="text-gray-600">
          Here’s a quick overview of your tasks and projects.
        </p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-white shadow rounded p-4">
          <h3 className="text-gray-500 text-sm">Total Projects</h3>
          <p className="text-2xl font-bold text-gray-800">8</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h3 className="text-gray-500 text-sm">Pending Tasks</h3>
          <p className="text-2xl font-bold text-gray-800">12</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h3 className="text-gray-500 text-sm">Completed Tasks</h3>
          <p className="text-2xl font-bold text-gray-800">34</p>
        </div>
      </div>

      {/* Recent activities table */}
      <div className="bg-white shadow rounded p-4">
        <h3 className="text-gray-700 font-semibold mb-3">Recent Activity</h3>
        <table className="min-w-full text-left text-gray-600">
          <thead>
            <tr>
              <th className="py-2 px-3 border-b">Task</th>
              <th className="py-2 px-3 border-b">Project</th>
              <th className="py-2 px-3 border-b">Status</th>
              <th className="py-2 px-3 border-b">Due Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-3">Design Landing Page</td>
              <td className="py-2 px-3">Website Redesign</td>
              <td className="py-2 px-3 text-yellow-600">In Progress</td>
              <td className="py-2 px-3">Jan 25, 2026</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-3">Fix Login Bug</td>
              <td className="py-2 px-3">Mobile App</td>
              <td className="py-2 px-3 text-green-600">Completed</td>
              <td className="py-2 px-3">Jan 20, 2026</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-3">Update Database Schema</td>
              <td className="py-2 px-3">Backend API</td>
              <td className="py-2 px-3 text-red-600">Pending</td>
              <td className="py-2 px-3">Jan 28, 2026</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
