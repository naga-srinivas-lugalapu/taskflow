"use client";

import { useState } from "react";
import PageContainer from "../../components/layout/PageContainer";

export default function SettingsPage() {
  const [name, setName] = useState("Naga Srinivas");
  const [email, setEmail] = useState("naga@example.com");
  const [theme, setTheme] = useState("light");

  return (
    <PageContainer title="Settings">
      <div className="space-y-8 max-w-2xl">
        {/* Profile Section */}
        <section className="bg-white border rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Profile
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Full name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Email address
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button className="mt-2 bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Save changes
            </button>
          </div>
        </section>

        {/* Preferences Section */}
        <section className="bg-white border rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Preferences
          </h2>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Theme
            </label>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system">System</option>
            </select>
          </div>
        </section>
      </div>
    </PageContainer>
  );
}
