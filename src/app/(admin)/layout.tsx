// import "../(public)/globals.css"


// export default function AdminLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen bg-[#050816] text-slate-100">

//         {/* Gradient background layer */}
//         <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#050816] via-[#0A1A2F] to-[#0F4C5C]" />

//         {/* Ambient glow blobs */}
//         <div className="pointer-events-none fixed inset-0 -z-10">
//           <div className="absolute top-0 right-10 h-56 w-56 rounded-full bg-[#06B6D4]/25 blur-3xl" />
//           <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-[#FACC15]/18 blur-3xl" />
//         </div>

//         {/* Main content container */}
//         <main className="relative mx-auto max-w-7xl px-4 py-8 md:px-8">
//           {/* Glass panel wrapper similar to contact modal */}
//           <div className="rounded-3xl border border-slate-800/70 bg-[#020617]/80 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.65)] p-6 md:p-10">
//             {children}
//           </div>
//         </main>

//       </body>
//     </html>
//   );
// }



import "../(public)/globals.css";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black">

        {/* Page wrapper */}
        <main className="min-h-screen">
          {children}
        </main>

      </body>
    </html>
  );
}
