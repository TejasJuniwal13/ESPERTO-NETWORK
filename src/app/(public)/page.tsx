"use client";

import Link from "next/link";
import Image from "next/image";
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


export default function Home() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-[#050816] text-slate-100 overflow-x-hidden"
      >

        {/* HERO SECTION */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative max-w-full overflow-hidden"
          style={{
            backgroundImage: "url('/hero.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-slate-900/80" />

          <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-36 md:py-48 md:flex-row md:items-center md:justify-between">

            <div className="max-w-xl space-y-6">

              <p className="text-4xl md:text-6xl font-extrabold uppercase tracking-[0.05em] text-[#06B6D4] break-words">
                Esperto Networks
              </p>

              <p className="text-sm md:text-xl text-slate-200">
                Build Teams. Streamline Support. Deploy Infrastructure.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-full bg-[#06B6D4] px-6 py-2 text-sm font-semibold text-[#050816] hover:bg-[#08c3e5] transition-colors"
                >
                  Get started
                </Link>
                

                <Link
                  href="/service"
                  className="rounded-full border border-slate-400/70 px-6 py-2 text-sm font-semibold text-slate-100 hover:border-slate-200 transition-colors"
                >
                  Explore our services
                </Link>
              </div>

              <div className="flex gap-8 pt-4 text-xs text-slate-300">
                <div>
                  <div className="text-lg font-semibold text-slate-100">99.9%</div>
                  <div>Network uptime</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-slate-100">50+</div>
                  <div>Enterprise clients</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-slate-100">24/7</div>
                  <div>Ops monitoring</div>
                </div>
              </div>
            </div>

          </div>
        </motion.section>

        {/* SECTION 2 */}
        <section className="bg-slate-50 text-[#0A1A2F] py-28">
          <div className="max-w-6xl mx-auto px-4 space-y-16">

            <p className="text-xl md:text-2xl font-semibold text-center max-w-5xl mx-auto leading-relaxed">
              We align world-class IT talent with unified support operations and precision-engineered infrastructure.
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-center text-[#0F4C5C] mt-10">
              What We Deliver
            </h2>

            <div className="grid gap-12 md:grid-cols-3 mt-14 overflow-hidden">
              <div className="p-6 rounded-2xl bg-white shadow-sm border transition-transform duration-300 md:hover:scale-[1.03]">
                <h3 className="text-xl font-semibold text-[#0F4C5C]">Skilled IT Teams</h3>
                <p className="mt-4 text-slate-600">
                  Expert engineers with certifications for mission-critical systems.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white shadow-sm border transition-transform duration-300 md:hover:scale-[1.03]">
                <h3 className="text-xl font-semibold text-[#0F4C5C]">Centralized Support</h3>
                <p className="mt-4 text-slate-600">
                  Faster response, clear communication, unified operations.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white shadow-sm border transition-transform duration-300 md:hover:scale-[1.03]">
                <h3 className="text-xl font-semibold text-[#0F4C5C]">Reliable Infrastructure</h3>
                <p className="mt-4 text-slate-600">
                  Production-ready deployment and data-center optimization.
                </p>
              </div>
            </div>

            <div className="w-full max-w-md h-px bg-slate-300 mx-auto my-12" />
          </div>
        </section>




    <section className="relative py-28 bg-[#050816] overflow-hidden">

      {/* glow accent */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2
      w-[500px] h-[200px] bg-[#06B6D4]/20 blur-[120px] rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-xs uppercase tracking-[0.4em] text-[#06B6D4]">
            Trusted By
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-semibold">
            Companies that rely on
            <span className="block bg-gradient-to-r from-[#39FF14] via-white to-[#06B6D4] bg-clip-text text-transparent">
              Esperto Networks
            </span>
          </h2>

        </div>

        {/* Logos Grid */}
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">

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

    </section>
 





        {/* CTA */}
          <section className="bg-[#0A1A2F] py-16 text-slate-100">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between">

            <h2 className="text-2xl md:text-4xl font-semibold mb-8 md:mb-0">
              What can we help you achieve?
            </h2>

            <div className="flex flex-col items-start gap-4">
              <Link
                href="/contact"
                className="w-60 text-center px-8 py-4 rounded-full bg-[#06B6D4] text-[#0A1A2F] font-semibold"
              >
                Work With Us
              </Link>

              <Link
                href="/carrer"
                className="w-60 text-center px-8 py-4 rounded-full border border-slate-300 font-semibold"
              >
                Apply for Job
              </Link>
            </div>

          </div>
        </section>

      </motion.div>
    </AnimatePresence>
  );
}
















