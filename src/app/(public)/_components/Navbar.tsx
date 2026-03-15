

"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-[#0F4C5C] via-[#105c7a] to-[#0A1A2F]">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Brand */}
          <div className="flex items-center space-x-2">

            {/* logo  */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#06B6D4]/20 blur-xl rounded-full"></div>

              <span className="text-sm font-semibold tracking-wide text-[#F8FAFC]">
                <img
                  src="/esperto.png"
                  alt="Esperto Networks"
                  className="h-15 w-auto"
                />
              </span>
              </div>

              

              {/* <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-wide text-[#F8FAFC]">
                Esperto Networks
              </span>
              <span className="text-[11px] text-[#9CA3AF]">
                Networking Services
              </span>
            </div> */}

            </div>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/service", label: "Services" },
                { href: "/contact", label: "Contact" },
                { href: "/carrer", label: "Career" },
                { href: "/freelancer", label: "Become a FreeLancer" },
              ].map((item) => (
                <motion.li key={item.href} whileHover={{ y: -2 }}>
                  <Link
                    href={item.href}
                    className="text-[#E5E7EB] hover:text-[#06B6D4] transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Link
                href="/login"
                className="text-xs font-medium text-[#F8FAFC] hover:text-[#06B6D4]"
              >
                Login
              </Link>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full border border-[#06B6D4] bg-[#06B6D4] px-4 py-1.5 text-xs font-semibold text-[#0A0A0A] shadow-sm hover:bg-transparent hover:text-[#F8FAFC]"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>

            {/* Mobile Hamburger */}
            <button className="md:hidden" onClick={() => setOpen(!open)}>
              <motion.div initial={false} animate={open ? "open" : "closed"}>
                <motion.span
                  className="block w-7 h-1 bg-[#F8FAFC] mb-1"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 6 },
                  }}
                />
                <motion.span
                  className="block w-7 h-1 bg-[#F8FAFC] mb-1"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                />
                <motion.span
                  className="block w-7 h-1 bg-[#F8FAFC]"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 },
                  }}
                />
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Animated */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="md:hidden px-4 pb-4"
            >
              <ul className="space-y-3 text-sm font-medium">
                <li><Link href="/" onClick={() => setOpen(false)} className="text-[#F8FAFC]">Home</Link></li>
                <li><Link href="/about" onClick={() => setOpen(false)} className="text-[#E5E7EB]">About</Link></li>
                <li><Link href="/service" onClick={() => setOpen(false)} className="text-[#E5E7EB]">Services</Link></li>
                <li><Link href="/contact" onClick={() => setOpen(false)} className="text-[#E5E7EB]">Contact</Link></li>
                <li><Link href="/carrer" onClick={() => setOpen(false)} className="text-[#E5E7EB]">Career</Link></li>
                <li><Link href="/freelancer" onClick={() => setOpen(false)} className="text-[#E5E7EB]">Become a FreeLancer</Link></li>
              </ul>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 flex items-center gap-3"
              >
                <Link href="/login" onClick={() => setOpen(false)} className="text-xs font-medium text-[#F8FAFC]">
                  Login
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center rounded-full border border-[#06B6D4] bg-[#06B6D4] px-4 py-1.5 text-xs font-semibold text-[#0A0A0A] hover:bg-transparent hover:text-[#F8FAFC]"
                >
                  Get Started
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
    </nav>
  );
}
