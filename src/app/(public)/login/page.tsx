"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError("Invalid email or password");
      return;
    }

    if (data.role === "ADMIN") router.push("/admin");
    else router.push("/portal");
  }

  return (
    <div className="min-h-screen bg-[#050816] flex items-center justify-center px-4 py-16">

      {/* Ambient glows */}

      <div className="pointer-events-none absolute top-10 right-10 h-32 w-32 rounded-full bg-[#06B6D4]/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-10 h-40 w-40 rounded-full bg-[#FACC15]/20 blur-3xl" />

      {/* Card */}
      <div className="relative w-full max-w-md rounded-3xl border border-slate-800/70 bg-gradient-to-br from-[#050816] via-[#0A1A2F] to-[#0F4C5C] shadow-[0_20px_60px_rgba(0,0,0,0.75)] px-8 py-10">

        <h1 className="text-3xl font-semibold text-slate-50 mb-2">
          Welcome back
        </h1>

        <p className="text-slate-300 text-sm mb-6">
          Login to access your dashboard
        </p>

        {error && (
          <p className="text-red-400 text-sm mb-4 bg-red-500/10 px-3 py-2 rounded-lg border border-red-700/40">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="text-xs uppercase tracking-[0.18em] text-slate-400">
              Email
            </label>
            <input
              className="w-full mt-1 rounded-xl border border-slate-700 bg-[#020617] px-3 py-2 text-sm text-slate-100
              placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/70"
              placeholder="you@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="text-xs uppercase tracking-[0.18em] text-slate-400">
              Password
            </label>
            <input
              type="password"
              className="w-full mt-1 rounded-xl border border-slate-700 bg-[#020617] px-3 py-2 text-sm text-slate-100
              placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/70"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 rounded-full bg-[#06B6D4] py-2.5 text-sm font-semibold text-[#020617]
            shadow-lg hover:bg-[#0ad2f5] transition-colors"
          >
            Login
          </button>
        </form>


      </div>
    </div>
  );
}
