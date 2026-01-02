"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const router = useRouter();
  const [freelancers, setFreelancers] = useState<any[]>([]);

  async function load() {
    const res = await fetch("/api/admin/freelancer");
    const data = await res.json();
    setFreelancers(data);
  }

  useEffect(() => {
    load();
  }, []);

  async function approve(id: number) {
    await fetch("/api/admin/approve", {
      method: "POST",
      body: JSON.stringify({ id }),
    });
    load();
  }

  async function reject(id: number) {
    await fetch("/api/admin/reject", {
      method: "POST",
      body: JSON.stringify({ id }),
    });
    load();
  }

  async function logout() {
    await fetch("/api/admin/logout", {
      method: "POST",
    });

    router.push("/login");
  }

  return (
    <div className="p-6 text-white">

      {/* --- top bar section --- */}
      <div className="mb-6">
        {/* top strip with Employees (left) and Logout (right) */}
        <div className="flex items-center justify-between mb-2">

          {/* Employees link */}
          <p
            onClick={() => router.push("/admin/employees")}
            className="cursor-pointer text-sm font-medium hover:text-red-400"
          >
            Employees
          </p>

          {/* Logout button */}
          <button
            onClick={logout}
            className="rounded-full bg-red-500 px-4 py-1.5 text-sm font-semibold text-black hover:bg-red-400"
          >
            Logout
          </button>
        </div>

        {/* centered heading */}
        <h1 className="text-2xl text-center font-bold">
          Admin Portal
        </h1>
      </div>

      {/* --- table --- */}
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b border-gray-700">
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Resume</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {freelancers.map((f) => (
            <tr key={f.id} className="border-b border-gray-800">
              <td>{f.name}</td>
              <td>{f.email}</td>
              <td>{f.phone}</td>
              <td>
                <a
                  href={f.resumeUrl}
                  target="_blank"
                  className="text-cyan-400"
                >
                  View Resume
                </a>
              </td>
              <td>
                <button
                  onClick={() => approve(f.id)}
                  className="bg-green-500 text-black px-2 py-1 mr-2 rounded"
                >
                  Approve
                </button>

                <button
                  onClick={() => reject(f.id)}
                  className="bg-red-500 text-black px-2 py-1 rounded"
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
