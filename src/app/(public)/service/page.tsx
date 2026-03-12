import React from 'react'

const page = () => {
  return (
    <>
{/* SERVICES INTRO — THEME MATCH */}

<section className="relative w-full py-28 px-4 md:px-8
bg-gradient-to-b from-[#0A1A2F] via-[#0F4C5C] to-[#105c7a]">

  {/* Neon Glow Accent */}
  <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2
  h-52 w-[500px] rounded-full bg-[#39FF14]/15 blur-[120px]" />

  <div className="relative mx-auto max-w-6xl">

    {/* Heading */}
    <div className="text-center mb-20">

      <p className="text-xs uppercase tracking-[0.45em] text-[#39FF14] font-semibold">
        Our Infrastructure Philosophy
      </p>

      <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight
      bg-gradient-to-r from-[#39FF14] via-[#E5E7EB] to-[#06B6D4]
      bg-clip-text text-transparent">

        Reliable Infrastructure. Built for Enterprise.
      </h1>

      <p className="mt-6 text-slate-300 max-w-2xl mx-auto leading-relaxed">
        Esperto Networks blends deep engineering expertise with modern
        infrastructure technologies to deliver secure, scalable, and
        high-performance IT environments across India.
      </p>

    </div>


    {/* Split Grid */}
    <div className="grid md:grid-cols-2 gap-16 text-sm md:text-base">

      {/* LEFT */}
      <div className="space-y-8">

        <div className="flex justify-between border-t border-white/10 pt-6">
          <span className="font-semibold text-white">
            Engineering Expertise
          </span>
          <span className="text-slate-300 text-right max-w-xs">
            Certified infrastructure engineers delivering
            enterprise-grade deployments and reliable operations.
          </span>
        </div>

        <div className="flex justify-between border-t border-white/10 pt-6">
          <span className="font-semibold text-white">
            Modern Technologies
          </span>
          <span className="text-slate-300 text-right max-w-xs">
            Cloud infrastructure, virtualization, IP surveillance,
            and unified communication systems.
          </span>
        </div>

        <div className="flex justify-between border-t border-white/10 pt-6">
          <span className="font-semibold text-white">
            Security & Performance
          </span>
          <span className="text-slate-300 text-right max-w-xs">
            Architected infrastructure prioritizing security,
            stability, and optimized performance.
          </span>
        </div>

      </div>


      {/* RIGHT */}
      <div className="space-y-8">

        <div className="flex justify-between border-t border-white/10 pt-6">
          <span className="font-semibold text-white">
            PAN India Presence
          </span>
          <span className="text-slate-300 text-right max-w-xs">
            Engineers deployed across Tier 1, 2, and 3 cities
            ensuring fast on-site support nationwide.
          </span>
        </div>

        <div className="flex justify-between border-t border-white/10 pt-6">
          <span className="font-semibold text-white">
            Rapid Deployment
          </span>
          <span className="text-slate-300 text-right max-w-xs">
            Efficient delivery of large-scale migrations,
            upgrades, and multi-site IT infrastructure.
          </span>
        </div>

        <div className="flex justify-between border-t border-white/10 pt-6">
          <span className="font-semibold text-white">
            Long-Term Partnership
          </span>
          <span className="text-slate-300 text-right max-w-xs">
            Transparent communication and dependable service
            built for lasting technical collaboration.
          </span>
        </div>

      </div>

    </div>

  </div>

</section>




{/* OUR SERVICES — PREMIUM GRID */}

<section className="relative w-full py-32 px-4 md:px-8
bg-gradient-to-b from-[#0A1A2F] via-[#0F4C5C] to-[#105c7a]">

  {/* Neon Glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-64 w-[600px]
  bg-[#39FF14]/20 blur-[140px] rounded-full pointer-events-none" />

  <div className="relative mx-auto max-w-7xl">

    {/* Heading */}
    <div className="text-center mb-20">

      <p className="text-xs uppercase tracking-[0.5em] text-[#39FF14] font-semibold">
        Our Services
      </p>

      <h2 className="mt-4 text-4xl md:text-5xl font-extrabold
      bg-gradient-to-r from-[#39FF14] via-[#E5E7EB] to-[#06B6D4]
      bg-clip-text text-transparent">

        Infrastructure Services That Scale
      </h2>

      <p className="mt-6 text-slate-300 max-w-2xl mx-auto">
        Enterprise-grade IT deployment, networking, cloud, and security
        infrastructure delivered with precision and nationwide support.
      </p>

    </div>


    {/* Services Grid */}
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

      {/* SERVICE CARD */}
      <div className="group relative p-8 rounded-3xl backdrop-blur-xl
      bg-white/5 border border-white/10
      transition-all duration-300
      hover:-translate-y-2 hover:border-[#39FF14]/50 hover:shadow-[0_0_40px_rgba(57,255,20,0.15)]">

        <h3 className="text-lg font-semibold text-white mb-4">
          Hardware Installation
        </h3>

        <ul className="space-y-2 text-sm text-slate-300">
          <li>Server rack mounting</li>
          <li>Switches & router deployment</li>
          <li>SAN / NAS installation</li>
          <li>Workstation setup</li>
        </ul>

      </div>


      {/* SERVICE CARD */}
      <div className="group relative p-8 rounded-3xl backdrop-blur-xl
      bg-white/5 border border-white/10
      transition-all duration-300
      hover:-translate-y-2 hover:border-[#39FF14]/50 hover:shadow-[0_0_40px_rgba(57,255,20,0.15)]">

        <h3 className="text-lg font-semibold text-white mb-4">
          Networking & Cabling
        </h3>

        <ul className="space-y-2 text-sm text-slate-300">
          <li>Cat6 & Fiber cabling</li>
          <li>Patch panel management</li>
          <li>Structured office cabling</li>
          <li>Network optimization</li>
        </ul>

      </div>


      {/* SERVICE CARD */}
      <div className="group relative p-8 rounded-3xl backdrop-blur-xl
      bg-white/5 border border-white/10
      transition-all duration-300
      hover:-translate-y-2 hover:border-[#39FF14]/50 hover:shadow-[0_0_40px_rgba(57,255,20,0.15)]">

        <h3 className="text-lg font-semibold text-white mb-4">
          Data Center Deployment
        </h3>

        <ul className="space-y-2 text-sm text-slate-300">
          <li>Rack stacking & server setup</li>
          <li>Dell iDRAC configuration</li>
          <li>Storage connectivity</li>
          <li>Infrastructure monitoring</li>
        </ul>

      </div>


      {/* SERVICE CARD */}
      <div className="group relative p-8 rounded-3xl backdrop-blur-xl
      bg-white/5 border border-white/10
      transition-all duration-300
      hover:-translate-y-2 hover:border-[#39FF14]/50 hover:shadow-[0_0_40px_rgba(57,255,20,0.15)]">

        <h3 className="text-lg font-semibold text-white mb-4">
          Network Configuration
        </h3>

        <ul className="space-y-2 text-sm text-slate-300">
          <li>Router & firewall setup</li>
          <li>VLAN / STP / trunking</li>
          <li>OSPF / BGP routing</li>
          <li>VPN & security policies</li>
        </ul>

      </div>


      {/* SERVICE CARD */}
      <div className="group relative p-8 rounded-3xl backdrop-blur-xl
      bg-white/5 border border-white/10
      transition-all duration-300
      hover:-translate-y-2 hover:border-[#39FF14]/50 hover:shadow-[0_0_40px_rgba(57,255,20,0.15)]">

        <h3 className="text-lg font-semibold text-white mb-4">
          AV & Communication
        </h3>

        <ul className="space-y-2 text-sm text-slate-300">
          <li>Video conferencing systems</li>
          <li>VoIP & IP telephony</li>
          <li>Smart board installation</li>
          <li>Unified communication</li>
        </ul>

      </div>


      {/* SERVICE CARD */}
      <div className="group relative p-8 rounded-3xl backdrop-blur-xl
      bg-white/5 border border-white/10
      transition-all duration-300
      hover:-translate-y-2 hover:border-[#39FF14]/50 hover:shadow-[0_0_40px_rgba(57,255,20,0.15)]">

        <h3 className="text-lg font-semibold text-white mb-4">
          Cloud & Data Center
        </h3>

        <ul className="space-y-2 text-sm text-slate-300">
          <li>Hybrid cloud deployment</li>
          <li>Hyper-converged infrastructure</li>
          <li>Server scalability solutions</li>
          <li>Cloud migration</li>
        </ul>

      </div>

    </div>

  </div>

</section>





    </>
  )
}

export default page