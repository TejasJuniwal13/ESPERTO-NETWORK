// "use client";

// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function AdminPage() {
//   const router = useRouter();
//   const [freelancers, setFreelancers] = useState<any[]>([]);

//   async function load() {
//     const res = await fetch("/api/admin/freelancer");
//     const data = await res.json();
//     setFreelancers(data);
//   }

//   useEffect(() => {
//     load();
//   }, []);

//   async function approve(id: number) {
//     await fetch("/api/admin/approve", {
//       method: "POST",
//       body: JSON.stringify({ id }),
//     });
//     load();
//   }

//   async function reject(id: number) {
//     await fetch("/api/admin/reject", {
//       method: "POST",
//       body: JSON.stringify({ id }),
//     });
//     load();
//   }

//   async function logout() {
//     await fetch("/api/admin/logout", {
//       method: "POST",
//     });

//     router.push("/login");
//   }

//   return (
//     <div className="p-6 text-white">

//       {/* --- top bar section --- */}
//       <div className="mb-6">
//         {/* top strip with Employees (left) and Logout (right) */}
//         <div className="flex items-center justify-between mb-2">

//           {/* Employees link */}
//           <p
//             onClick={() => router.push("/admin/employees")}
//             className="cursor-pointer text-sm font-medium hover:text-red-400"
//           >
//             Employees
//           </p>

//           {/* Logout button */}
//           <button
//             onClick={logout}
//             className="rounded-full bg-red-500 px-4 py-1.5 text-sm font-semibold text-black hover:bg-red-400"
//           >
//             Logout
//           </button>
//         </div>

//         {/* centered heading */}
//         <h1 className="text-2xl text-center font-bold">
//           Admin Portal
//         </h1>
//       </div>

//       {/* --- table --- */}
//       <table className="w-full text-sm">
//         <thead>
//           <tr className="text-left border-b border-gray-700">
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Resume</th>
//             <th>Actions</th>
//           </tr>
//         </thead>

//         <tbody>
//           {freelancers.map((f) => (
//             <tr key={f.id} className="border-b border-gray-800">
//               <td>{f.name}</td>
//               <td>{f.email}</td>
//               <td>{f.phone}</td>
//               <td>
//                 <a
//                   href={f.resumeUrl}
//                   target="_blank"
//                   className="text-cyan-400"
//                 >
//                   View Resume
//                 </a>
//               </td>
//               <td>
//                 <button
//                   onClick={() => approve(f.id)}
//                   className="bg-green-500 text-black px-2 py-1 mr-2 rounded"
//                 >
//                   Approve
//                 </button>

//                 <button
//                   onClick={() => reject(f.id)}
//                   className="bg-red-500 text-black px-2 py-1 rounded"
//                 >
//                   Reject
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//     </div>
//   );
// }


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
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/login");
  }

  return (
    <div className="min-h-screen bg-white text-black">

      {/* Top bar */}
      <div className="w-full bg-gray-100 px-4 sm:px-8 py-3 sm:py-4 flex flex-col sm:flex-row gap-3 sm:gap-0 items-center justify-between shadow">

        {/* Employees tab */}
        <div className="relative">
          <p
            onClick={() => router.push("/admin/employees")}
            className="text-blue-600 font-semibold cursor-pointer"
          >
            Employees
          </p>
          <div className="h-1 bg-blue-600 rounded-full mt-1" />
        </div>

        {/* Logout */}
        <button
          onClick={logout}
          className="bg-red-500 text-white font-semibold px-5 py-2 rounded hover:bg-red-400 w-full sm:w-auto"
        >
          Logout
        </button>
      </div>

      {/* Page title */}
      <h1 className="text-2xl sm:text-3xl font-bold mt-6 mb-4 text-center">
        Admin Portal
      </h1>

      {/* Card */}
      <div className="w-[95%] max-w-10xl mx-auto bg-white border rounded-2xl shadow-xl p-4 sm:p-8">

        {/* Scroll container for mobile */}
        <div className="overflow-x-auto">

          <table className="w-full min-w-[750px] text-[14px] sm:text-[15px]">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="py-3 px-2 text-left">Name</th>
                <th className="py-3 px-2 text-left">Email</th>
                <th className="py-3 px-2 text-left">Phone</th>
                <th className="py-3 px-2 text-left">Resume</th>
                <th className="py-3 px-2 text-left">Status</th>
                <th className="py-3 px-2 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {freelancers.map((f) => (
                <tr key={f.id} className="border-b">
                  <td className="py-3 px-2">{f.name}</td>
                  <td className="py-3 px-2 text-blue-600 underline">{f.email}</td>
                  <td className="py-3 px-2">{f.phone}</td>

                  <td className="py-3 px-2">
                    <a
                      href={f.resumeUrl}
                      target="_blank"
                      className="text-blue-600 underline"
                    >
                      Resume
                    </a>
                  </td>

                  <td className="py-3 px-2">
                    <span className="text-green-600 font-medium">
                      Active
                    </span>
                  </td>

                  <td className="py-3 px-2 space-x-1 sm:space-x-2">
                    <button
                      onClick={() => approve(f.id)}
                      className="bg-blue-600 text-white px-2 sm:px-3 py-1.5 rounded hover:bg-blue-500"
                    >
                      Approve
                    </button>

                    <button
                      onClick={() => reject(f.id)}
                      className="bg-red-600 text-white px-2 sm:px-3 py-1.5 rounded hover:bg-red-500"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-3 mt-8 text-sm sm:text-base">
          <button className="px-3 py-1.5 border rounded hover:bg-gray-100">
            « Previous
          </button>
          <span>1 of 5</span>
          <button className="px-3 py-1.5 border rounded hover:bg-gray-100">
            Next »
          </button>
        </div>
      </div>
    </div>
  );
}
