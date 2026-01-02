"use client";

import { useEffect, useState } from "react";

export default function EmployeesPage() {
  const [employees, setEmployees] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadEmployees() {
    setLoading(true);

    const res = await fetch("/api/admin/employees");
    const data = await res.json();

    setEmployees(data);
    setLoading(false);
  }

  useEffect(() => {
    loadEmployees();
  }, []);

  if (loading) {
    return <p className="p-6 text-white">Loading employees...</p>;
  }

  return (
    <div className="p-6 text-white min-h-screen bg-[#0A1A2F]">
      <h1 className="text-2xl mb-4 font-semibold">Selected Employees</h1>

      {employees.length === 0 && (
        <p className="text-gray-400">No employees selected yet.</p>
      )}

      <div className="space-y-4">
        {employees.map((e) => (
          <div
            key={e.id}
            className="border border-gray-700 rounded-lg p-4 bg-[#0F172A]"
          >
            <p className="font-semibold text-lg">{e.name}</p>

            <p className="text-sm text-gray-300">
              Email: <span className="text-gray-200">{e.email}</span>
            </p>

            <p className="text-sm text-gray-300">
              Phone: <span className="text-gray-200">{e.phone}</span>
            </p>

            <p className="text-sm text-gray-300">
              Skills: <span className="text-gray-200">{e.skills}</span>
            </p>

            <a
              href={e.resumeUrl}
              target="_blank"
              className="inline-block mt-2 text-cyan-400 underline"
            >
              View Resume
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
