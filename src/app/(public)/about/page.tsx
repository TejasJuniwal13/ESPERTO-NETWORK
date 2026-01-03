"use client"
// import React from "react";

const About = () => {
  return (
    <div className="bg-[#050816] text-slate-100">
      <section className="relative mx-auto max-w-6xl px-4 py-20 md:px-6">
        
        <div className="grid gap-12 md:grid-cols-2 items-center">

          {/* LEFT SIDE - TEXT */}
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#06B6D4]">
              About Us
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              The foundation behind
              <span className="block bg-gradient-to-r from-[#FACC15] via-[#06B6D4] to-[#E5E7EB] bg-clip-text text-transparent">
                resilient IT infrastructure.
              </span>
            </h1>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              We align IT talent, streamline support operations, and deploy
              enterprise-grade infrastructure to help businesses operate with
              stability, confidence, and efficiency.
            </p>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Our engineering-led approach ensures quicker issue resolution,
              higher uptime, and scalable performance across cloud, network,
              and on-premise environments.
            </p>
          </div>

          {/* RIGHT SIDE - IMAGE WITH ROYAL CONTRAST */}
          <div className="relative">
            {/* Glow behind image */}
            <div className="absolute inset-0 -z-10 rounded-3xl bg-[#06B6D4]/20 blur-2xl" />

            {/* <div className="overflow-hidden rounded-3xl border border-[#06B6D4]/30 shadow-[0_10px_40px_rgba(0,0,0,0.6)]"> */}
            <div className="overflow-hidden rounded-3xl border border-[#050816] shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
              <img
                src="/about.png"alt="About us" className="w-full h-full object-cover contrast-125 brightness-110"
              />
            </div>
          </div>

        </div>
      </section>


{/*mission and vision  section ----> 2 */}

{/* MISSION & VISION — ROYAL NEON CONTRAST BLOCK */}
<section className="relative w-full py-60 px-4 md:px-8"
style={{
          backgroundImage: "url('/hero.png')", // put image in public/
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
>

  {/* Top Blue + Neon Green Contrast Gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#0A1A2F] via-[#0F4C5C] to-transparent" />

  {/* Neon Green Aura */}
  <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-56 w-96 rounded-full bg-[#39FF14]/20 blur-[140px]" />

  <div className="relative mx-auto max-w-6xl">
    <div className="grid gap-20 md:grid-cols-2">

      {/* ESPERTO — Mission */}
      <div className="space-y-6">
        {/* Label */}
        <h3 className="text-sm font-bold uppercase tracking-[0.55em] text-[#39FF14]/95">
          ESPERTO
        </h3>

        {/* Fancy Heading */}
        <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight bg-gradient-to-r from-[#39FF14] via-[#E5E7EB] to-[#06B6D4] bg-clip-text text-transparent tracking-tight">
          Defining our pursuit
        </p>

        {/* Description */}
        <p className="text-slate-100/90 text-sm md:text-base leading-relaxed max-w-md">
          Delivering sovereign-grade IT stewardship—precise, resilient, and
          architected for operational continuity across every tier of enterprise.
        </p>
      </div>

      {/* VISION */}
      <div className="space-y-6">
        {/* Label */}
        <h3 className="text-sm font-bold uppercase tracking-[0.55em] text-[#39FF14]/95">
          Vision
        </h3>

        {/* Fancy Heading */}
        <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight bg-gradient-to-r from-[#06B6D4] via-[#E5E7EB] to-[#39FF14] bg-clip-text text-transparent tracking-tight">
          Our forward trajectory
        </p>

        {/* Description */}
        <p className="text-slate-100/90 text-sm md:text-base leading-relaxed max-w-md">
          Engineering a nationally unified IT ecosystem—secure, scalable, and
          future-aligned—empowering organisations to transcend geographic and
          infrastructural limitations.
        </p>
      </div>

    </div>
  </div>

</section>


{/* section 3 values  */}

{/* VALUES GRID — 3x3 with CONTRAST BG */}
<section className="relative w-full py-20 px-4 md:px-8 bg-gradient-to-b from-[#105c7a] via-[#4d689c] to-[#79838f]"
  
  >

  <div className="mx-auto py-20 max-w-5xl">

    {/* Intro */}
    <p className="text-slate-800  text-center md:text-lg leading-relaxed font-medium max-w-7xl mb-12">
      We are powered by care. It sharpens our discipline, strengthens our engineering, 
      and shapes every client relationship. It drives us to deliver precise outcomes, 
      dependable support, and sustained value across India.
    </p>

    {/* 3×3 GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">

      {/* 1 */}
      <div className="flex items-start gap-4">
        <img src="/icons/client-centric.png" className="h-10 w-10 opacity-90 mt-1" />
        <div>
          <p className="text-lg font-bold text-slate-900">Client-Centric</p>
          <p className="text-sm text-slate-700 leading-relaxed">
            Every decision grounded in business context.
          </p>
        </div>
      </div>

      {/* 2 */}
      <div className="flex items-start gap-4">
        <img src="/icons/reliable.png" className="h-10 w-10 opacity-90 mt-1" />
        <div>
          <p className="text-lg font-bold text-slate-900">Reliable</p>
          <p className="text-sm text-slate-700 leading-relaxed">
            Predictable delivery and consistent outcomes.
          </p>
        </div>
      </div>

      {/* 3 */}
      <div className="flex items-start gap-4">
        <img src="/icons/skilled.png" className="h-10 w-10 opacity-90 mt-1" />
        <div>
          <p className="text-lg font-bold text-slate-900">Skilled</p>
          <p className="text-sm text-slate-700 leading-relaxed">
            Certified engineers with deep specialization.
          </p>
        </div>
      </div>

      {/* 4 */}
      <div className="flex items-start gap-4">
        <img src="/icons/secure.png" className="h-10 w-10 opacity-90 mt-1" />
        <div>
          <p className="text-lg font-bold text-slate-900">Secure</p>
          <p className="text-sm text-slate-700 leading-relaxed">
            Hardened architectures, protection at every layer.
          </p>
        </div>
      </div>

      {/* 5 */}
      <div className="flex items-start gap-4">
        <img src="/icons/agile.png" className="h-10 w-10 opacity-90 mt-1" />
        <div>
          <p className="text-lg font-bold text-slate-900">Agile</p>
          <p className="text-sm text-slate-700 leading-relaxed">
            Fast response with nationwide reach.
          </p>
        </div>
      </div>

      {/* 6 */}
      <div className="flex items-start gap-4">
        <img src="/icons/innovative.png" className="h-10 w-10 opacity-90 mt-1" />
        <div>
          <p className="text-lg font-bold text-slate-900">Innovative</p>
          <p className="text-sm text-slate-700 leading-relaxed">
            Modern tools fused with expert engineering.
          </p>
        </div>
      </div>

      {/* 7 */}
      <div className="flex items-start gap-4">
        <img src="/icons/responsible.png" className="h-10 w-10 opacity-90 mt-1" />
        <div>
          <p className="text-lg font-bold text-slate-900">Responsible</p>
          <p className="text-sm text-slate-700 leading-relaxed">
            Ethical operations and transparent communication.
          </p>
        </div>
      </div>

      {/* 8 */}
      <div className="flex items-start gap-4">
        <img src="/icons/intelligent.png" className="h-10 w-10 opacity-90 mt-1" />
        <div>
          <p className="text-lg font-bold text-slate-900">Intelligent</p>
          <p className="text-sm text-slate-700 leading-relaxed">
            Data-backed insights and optimized workflows.
          </p>
        </div>
      </div>

      {/* 9 — optional empty or add value later */}
      <div></div>

    </div>
  </div>
</section>


{/* apply for job  */}


<section className="bg-[#0A1A2F] py-16 text-slate-100">
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between">

    {/* Left Text */}
    <h2 className="text-2xl md:text-4xl font-semibold mb-8 md:mb-0">
      What can we help you achieve?
    </h2>

    {/* Right Side Buttons (Vertical + Oval + Wider) */}
    <div className="flex flex-col items-start gap-4">

      <a 
        href="/contact"
        className="w-60 text-center px-8 py-4 rounded-full bg-[#06B6D4] text-[#0A1A2F] font-semibold text-base hover:bg-[#08c3e5] transition duration-300 shadow-md"
      >
        Work With Us
      </a>

      <a 
        href="/freelancer"
        className="w-60 text-center px-8 py-4 rounded-full border border-slate-300 text-slate-100 font-semibold text-base hover:border-white transition duration-300"
      >
        Apply for Job
      </a>

    </div>

  </div>
</section>


    </div>
  );
};

export default About;
