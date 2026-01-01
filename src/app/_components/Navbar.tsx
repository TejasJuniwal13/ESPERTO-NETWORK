"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#0A1A2F] border-b border-[#1F2937]">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Brand */}
          <div className="flex items-center space-x-2">
            <div className="h-9 w-9 rounded-lg bg-[#0F4C5C] flex items-center justify-center">
              <span className="text-sm font-semibold tracking-wide text-[#F8FAFC]">
                {/* Logo text or icon */}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-wide text-[#F8FAFC]">
                Esperto Networks
              </span>
              <span className="text-[11px] text-[#9CA3AF]">
                Networking Services
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <li>
              <Link
                href="/"
                className="text-[#F8FAFC] hover:text-[#06B6D4] transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-[#E5E7EB] hover:text-[#06B6D4] transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/service"
                className="text-[#E5E7EB] hover:text-[#06B6D4] transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-[#E5E7EB] hover:text-[#06B6D4] transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/carrer"
                className="text-[#E5E7EB] hover:text-[#06B6D4] transition-colors"
              >
                Career
              </Link>
            </li>
            <li>
              <Link
                href="/freelancer"
                className="text-[#E5E7EB] hover:text-[#06B6D4] transition-colors"
              >
                Become a FreeLancer
              </Link>
            </li>
          </ul>

          {/* CTA / Auth */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/login"
              className="text-xs font-medium text-[#F8FAFC] hover:text-[#06B6D4] transition-colors"
            >
              Login
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-[#06B6D4] bg-[#06B6D4] px-4 py-1.5 text-xs font-semibold text-[#0A0A0A] shadow-sm hover:bg-transparent hover:text-[#F8FAFC] transition-colors"
            >
              Get Started
            </Link>

            {/* <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-[#06B6D4] bg-[#06B6D4] px-4 py-1.5 text-xs font-semibold text-[#0A0A0A] shadow-sm hover:bg-transparent hover:text-[#F8FAFC] transition-colors"
            >
              Become a FreeLancer 
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
