"use client"
import React, { useState } from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";
import Link from 'next/link';


const ContactPage = () => {
  const [form, setForm] = useState({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const [loading, setLoading] = useState(false);
const [error, setError] = useState<string | null>(null);

  const [open,setOpen] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError(null);
  setLoading(true);

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error || "Something went wrong");
    }

    // success
    setForm({ name: "", email: "", subject: "", message: "" });
    setOpen(false);
  } catch (err: any) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};



  return (
        <>
    <div className="bg-[#050816] min-h-screen flex items-center justify-center px-4 py-16"
    >
      {/* Royal dark strip */}
      <section className="relative w-full max-w-5xl rounded-3xl border border-slate-800/70 bg-gradient-to-r from-[#050816] via-[#0A1A2F] to-[#0F4C5C] px-6 py-10 md:px-10 md:py-14 shadow-[0_20px_60px_rgba(0,0,0,0.75)]">
        {/* Ambient glows */}
        <div className="pointer-events-none absolute -top-10 right-4 h-32 w-32 rounded-full bg-[#06B6D4]/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[#FACC15]/18 blur-3xl" />

        <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-slate-300/90">
              Contact us
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-slate-50">
              It almost always begins
              <span className="block bg-gradient-to-r from-[#06B6D4] via-[#E5E7EB] to-[#FACC15] bg-clip-text text-transparent">
                with a conversation.
              </span>
            </h2>
            <p className="text-sm md:text-base text-slate-300 max-w-xl">
              Share what you’re building, where you’re stuck, or the outcomes you
              want to unlock. We’ll align the right expertise and infrastructure
              support around it.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#050816] shadow-lg hover:bg-slate-100 transition-colors"
          >
            Contact us
          </button>
        </div>
      </section>



        



      {/* Modal Overlay + Form */}
      {open && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          {/* Click outside to close */}
          <div
            className="absolute inset-0"
            onClick={() => setOpen(false)}
          ></div>

          {/* Modal content */}
          <div className="relative z-50 w-full max-w-3xl rounded-3xl border border-slate-800/80 bg-[#020617]/95 shadow-[0_24px_80px_rgba(0,0,0,0.85)] overflow-hidden">
            <div className="grid gap-0 md:grid-cols-2">
              {/* Left side: thanks text */}
              <div className="relative bg-gradient-to-br from-[#0F4C5C] via-[#0A1A2F] to-[#050816] p-6 md:p-8 flex flex-col justify-between">
                <div className="space-y-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-200/90">
                    THANKS FOR CONTACTING
                  </p>
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-50 leading-snug">
                    We appreciate the time you&apos;ve taken to reach out.
                  </h3>
                  <p className="text-xs md:text-sm text-slate-200/90">
                    Share a few details and our team will get back with a clear,
                    actionable response—no fluff, just what you need.
                  </p>
                </div>
                <p className="mt-6 text-[11px] text-slate-300/80">
                  Secured channel • Used only to respond to your enquiry.
                </p>
              </div>

              {/* Right side: form */}
              <div className="p-6 md:p-8 bg-[#020617]">
                {/* Close button */}
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="ml-auto mb-4 flex h-7 w-7 items-center justify-center rounded-full border border-slate-700/80 text-slate-400 text-xs hover:border-slate-500 hover:text-slate-200"
                >
                  ✕
                </button>





        {/* form  */}
        
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                      Name
                    </label>
                    <input
                     type="text"
                     placeholder="Your name"
                     value={form.name}
                onChange={(e) =>
        setForm({ ...form, name: e.target.value })
            }
  className="w-full rounded-xl border border-slate-700 bg-[#020617] px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/70"
/>

                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                      Email
                    </label>
                    <input
                     type="email"
                     placeholder="you@company.com"
                     value={form.email}
                  onChange={(e) =>
                       setForm({ ...form, email: e.target.value })
                     }
  className="w-full rounded-xl border border-slate-700 bg-[#020617] px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/70"
/>

                  </div>

                  {/* Subject */}
                  <div className="space-y-1">
                    <label className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                      Subject
                    </label>
                    <input
                     type="text"
                     placeholder="How can we help?"
                     value={form.subject}
                     onChange={(e) =>
                       setForm({ ...form, subject: e.target.value })
                     }
  className="w-full rounded-xl border border-slate-700 bg-[#020617] px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/70"
/>

                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                      Message
                    </label>
                    <textarea
                    rows={4}
                    placeholder="Write your message…"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
  className="w-full rounded-xl border border-slate-700 bg-[#020617] px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/70"
/>

                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-2 w-full rounded-full bg-[#06B6D4] py-2.5 text-sm font-semibold text-[#020617] hover:bg-[#08c3e5] transition-colors disabled:opacity-60"
                    >
                    {loading ? "Sending..." : "Submit"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>







{/* SOCIAL MEDIA SECTION */}
<section className="relative w-full py-16 px-4 md:px-8 bg-gradient-to-r from-[#050816] via-[#0A1A2F] to-[#0F4C5C]">
  
  {/* Glow accents */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute top-0 right-16 h-40 w-40 rounded-full bg-[#06B6D4]/20 blur-3xl" />
    <div className="absolute bottom-0 left-16 h-52 w-52 rounded-full bg-[#FACC15]/14 blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10">

    {/* LEFT: CONTENT */}
    <p className="text-slate-200 text-base md:text-lg max-w-xl leading-relaxed font-medium">
      Join us on social media to hear our latest insights, get a peek at our culture 
      and see how our unique approach helps clients achieve the extraordinary.
    </p>

    {/* RIGHT: SOCIAL LINKS */}
    <div className="flex items-center gap-6 md:gap-8">

      {/* LinkedIn */}
      <Link
        href="#"
        className="flex items-center gap-2 text-slate-200 hover:text-[#06B6D4] transition-colors"
      >
        <IoLogoLinkedin />
      </Link>

      {/* Twitter */}
      <Link
        href="#"
        className="flex items-center gap-2 text-slate-200 hover:text-[#06B6D4] transition-colors"
      >
        <BsTwitterX />
      </Link>

      {/* Instagram */}
      <Link
        href="#"
        className="flex items-center gap-2 text-slate-200 hover:text-[#06B6D4] transition-colors"
      >
        
    <IoLogoInstagram />
      </Link>

      {/* Facebook */}
      <Link
        href="#"
        className="flex items-center gap-2 text-slate-200 hover:text-[#06B6D4] transition-colors"
      >
        <FaFacebookSquare />
      </Link>

    </div>
  </div>
</section>

</>

  )
}

export default ContactPage
