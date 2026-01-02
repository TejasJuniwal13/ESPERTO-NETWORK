// "use client";

// import { useEffect, useState } from "react";

// export default function EmployeesPage() {
//   const [employees, setEmployees] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   async function loadEmployees() {
//     setLoading(true);

//     const res = await fetch("/api/admin/employees");
//     const data = await res.json();

//     setEmployees(data);
//     setLoading(false);
//   }

//   useEffect(() => {
//     loadEmployees();
//   }, []);

//   if (loading) {
//     return <p className="p-6 text-white">Loading employees...</p>;
//   }

//   return (
//     <div className="p-6 text-white min-h-screen bg-[#0A1A2F]">
//       <h1 className="text-2xl mb-4 font-semibold">Selected Employees</h1>

//       {employees.length === 0 && (
//         <p className="text-gray-400">No employees selected yet.</p>
//       )}

//       <div className="space-y-4">
//         {employees.map((e) => (
//           <div
//             key={e.id}
//             className="border border-gray-700 rounded-lg p-4 bg-[#0F172A]"
//           >
//             <p className="font-semibold text-lg">{e.name}</p>

//             <p className="text-sm text-gray-300">
//               Email: <span className="text-gray-200">{e.email}</span>
//             </p>

//             <p className="text-sm text-gray-300">
//               Phone: <span className="text-gray-200">{e.phone}</span>
//             </p>

//             <p className="text-sm text-gray-300">
//               Skills: <span className="text-gray-200">{e.skills}</span>
//             </p>

//             <a
//               href={e.resumeUrl}
//               target="_blank"
//               className="inline-block mt-2 text-cyan-400 underline"
//             >
//               View Resume
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



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
    return (
      <div className="min-h-screen bg-white text-black flex items-center justify-center">
        Loading employees...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black">

      {/* Page title */}
      <h1 className="text-3xl font-bold mt-8 mb-4 text-center">
        Selected Employees
      </h1>

      {/* Card container */}
      <div className="w-[95%] max-w-8xl mx-auto bg-white border rounded-2xl shadow-xl p-6 sm:p-8">

        {/* If empty */}
        {employees.length === 0 && (
          <p className="text-center text-gray-500 py-6">
            No employees selected yet.
          </p>
        )}

        {/* Table wrapper */}
        {employees.length > 0 && (
          <div className="overflow-x-auto">

            <table className="w-full min-w-[750px] text-[14px] sm:text-[15px]">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="py-3 px-2 text-left">Name</th>
                  <th className="py-3 px-2 text-left">Email</th>
                  <th className="py-3 px-2 text-left">Phone</th>
                  <th className="py-3 px-2 text-left">Skills</th>
                  <th className="py-3 px-2 text-left">Resume</th>
                </tr>
              </thead>

              <tbody>
                {employees.map((e) => (
                  <tr key={e.id} className="border-b">
                    <td className="py-3 px-2">{e.name}</td>

                    <td className="py-3 px-2 text-blue-600 underline">
                      {e.email}
                    </td>

                    <td className="py-3 px-2">
                      {e.phone}
                    </td>

                    <td className="py-3 px-2">
                      {e.skills}
                    </td>

                    <td className="py-3 px-2">
                      <a
                        href={e.resumeUrl}
                        target="_blank"
                        className="text-blue-600 underline"
                      >
                        View Resume
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        )}
      </div>
    </div>
  );
}
