"use client"
import React from 'react'
import { motion, AnimatePresence } from "framer-motion";


const clients = [
  "/clients/gsk.png",
  "/clients/alexis.png",
  "/clients/idfc.png",
  "/clients/mahindra.png",
  "/clients/renovision.png",
  "/clients/tislabs.png",
  "/clients/wipro.png",
  "/clients/LCL.png",
  "/clients/syndrome.jpeg",
  "clients/LA-tech.png",
  "clients/ncs.png",
  "clients/orangeTM.png",
  "clients/fedex.png",
  "clients/ncs.png",
  "clients/TP.png",
  "clients/ni.png",
  "clients/people.png",
  "clients/vcm.png",
];


const page = () => {
  return (
    <div>

      {/* hero section  */}
      <section className="relative py-32 bg-gradient-to-b from-[#050816] via-[#0A1A2F] to-[#050816] text-center">

  <div className="max-w-4xl mx-auto px-6">

    <p className="text-xs uppercase tracking-[0.35em] text-[#06B6D4]">
      Careers
    </p>

    <h1 className="mt-4 text-4xl md:text-6xl font-semibold">
      Join Our Team
      <span className="block bg-gradient-to-r from-[#39FF14] via-white to-[#06B6D4] bg-clip-text text-transparent">
        Build the Future of IT Infrastructure
      </span>
    </h1>

    <p className="mt-8 text-slate-300 leading-relaxed">
      Hightech Freelancer is one of India's fastest-growing platforms for
      on-site IT support, networking, cabling, and data center operations.
      Work with top enterprises across India and gain real-world
      infrastructure experience.
    </p>

    <a
      href="/freelancer"
      className="inline-block mt-10 px-10 py-4 rounded-full
      bg-[#06B6D4] text-[#050816] font-semibold
      hover:bg-[#08c3e5] transition"
    >
      Apply Today
    </a>

  </div>

</section>


  {/* why work with us  */}
<section className="py-28 bg-[#050816]">

  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-center text-3xl md:text-5xl font-semibold mb-16">
      Why Work With Us
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

      <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:-translate-y-2 transition">
        <h3 className="text-lg font-semibold mb-3">Flexible Work</h3>
        <p className="text-slate-300 text-sm">
          Project-based jobs across India with flexible timings.
        </p>
      </div>

      <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:-translate-y-2 transition">
        <h3 className="text-lg font-semibold mb-3">Earn More</h3>
        <p className="text-slate-300 text-sm">
          Attractive payouts for every on-site job completed.
        </p>
      </div>

      <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:-translate-y-2 transition">
        <h3 className="text-lg font-semibold mb-3">Skill Growth</h3>
        <p className="text-slate-300 text-sm">
          Work on real IT infrastructure and upgrade your skills.
        </p>
      </div>

      <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:-translate-y-2 transition">
        <h3 className="text-lg font-semibold mb-3">Big Clients</h3>
        <p className="text-slate-300 text-sm">
          Work for top enterprises and learn enterprise-level technology.
        </p>
      </div>

    </div>

  </div>

</section>


{/* who can apply */}

<section className="py-28 bg-gradient-to-b from-[#0A1A2F] to-[#050816]">

  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-center text-3xl md:text-5xl font-semibold mb-16">
      Who Can Apply
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

      {[
        "Desktop Support Engineers",
        "Network Engineers",
        "Server / Data Center Engineers",
        "CCTV / Surveillance Technicians",
        "Structured Cabling Experts",
        "IT Field Support Technicians"
      ].map((role, i) => (
        <div
          key={i}
          className="p-8 rounded-2xl bg-white/5 border border-white/10
          hover:border-[#06B6D4] transition"
        >
          <h3 className="font-semibold text-lg">
            {role}
          </h3>
        </div>
      ))}

    </div>

  </div>

</section>



{/* clients */}
  {/* Logos Grid */}
  <div className=' max-w-7xl mx-auto px-6'>
<div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">

  {clients.map((logo, i) => (
    <motion.div
      key={i}
      whileHover={{ y: -6, scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="
      group
      flex items-center justify-center
      h-24
      rounded-2xl
      border border-white/10
      backdrop-blur-md
      p-6
      transition-all duration-300
      hover:border-[#06B6D4]/40
      hover:bg-white/10
      "
    >

      <img
        src={logo}
        alt="client logo"
        className="
        max-h-12
        w-auto
        object-contain
        transition-transform duration-300
        group-hover:scale-110
        "
      />

    </motion.div>
  ))}

</div>
</div>



{/* apply CTA  */}

<section className="py-24 bg-[#050816] text-center">

  <h2 className="text-3xl md:text-5xl font-semibold">
    Ready to Start Your Journey?
  </h2>

  <p className="mt-4 text-slate-300">
    Join our network of skilled engineers and work on real IT projects.
  </p>

  <a
    href="/freelancer"
    className="inline-block mt-8 px-10 py-4 rounded-full
    bg-[#06B6D4] text-[#050816] font-semibold hover:bg-[#08c3e5]"
  >
    Apply Now
  </a>

</section>


    </div>
  )
}

export default page