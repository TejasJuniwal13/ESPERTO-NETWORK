"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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

        {/* CLIENT LOGOS */}
        <section className="bg-slate-50 text-[#0A1A2F] py-16">
          <div className="max-w-6xl mx-auto px-4 space-y-8">

            <div className="text-center space-y-4">
              <p className="text-base font-semibold uppercase tracking-[0.2em] text-slate-500">Our Clients</p>
              <div className="w-40 mx-auto border-b-2 border-slate-500" />
            </div>

            <div className="flex items-center gap-10 overflow-x-auto w-full mx-auto max-w-5xl py-6">
              {[1, 2, 3, 4].map((id) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <Image
                    src={`/clients/client${id}.png`}
                    width={120}
                    height={120}
                    alt={`client${id}`}
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
                href="/career"
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
