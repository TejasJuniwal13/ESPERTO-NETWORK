import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#050816] text-slate-300 py-16">
      <div className="max-w-6xl mx-auto px-4 grid gap-10 md:grid-cols-4">

        {/* Brand / About */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Esperto Networks</h2>
          <p className="text-sm leading-relaxed text-slate-400">
            Delivering reliable IT infrastructure, managed services, and
            expert engineering support to help enterprises operate with
            confidence and scale seamlessly.
          </p>
        </div>

        {/* Office Address */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Office Address</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            C829, 8TH FLOOR, RIVER HEIGHTS,<br />
            RAJNAGAR EXTENSION, NCR,<br />
            GHAZIABAD - 201017
          </p>
        </div>

        {/* Contact Us + Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>

          <p className="text-sm text-slate-300 font-semibold">Amit Singha</p>
          <p className="text-sm text-slate-400">Email: amit.singha@espertonetworks.com</p>
          <p className="text-sm text-slate-400 mb-3">Phone: +91 83350 68984</p>

          <p className="text-sm text-slate-300 font-semibold">Meenakshee Singha</p>
          <p className="text-sm text-slate-400">Email: minisingha@espertonetworks.com</p>
          <p className="text-sm text-slate-400 mb-3">Phone: +91 98996 67986</p>

          {/* Social Icons */}
          <div className="mt-4 flex items-center gap-4 text-xl">
            <a href="#" className="hover:text-[#06B6D4] transition">
              <FaFacebookSquare />
            </a>
            <a href="#" className="hover:text-[#06B6D4] transition">
              <IoLogoLinkedin />
            </a>
            <a href="#" className="hover:text-[#06B6D4] transition">
              <IoLogoInstagram />
            </a>
            <a href="#" className="hover:text-[#06B6D4] transition">
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-[#06B6D4] transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#06B6D4] transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#06B6D4] transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/carrer" className="hover:text-[#06B6D4] transition">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#06B6D4] transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copy */}
      <div className="mt-12 border-t border-slate-700 pt-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Esperto Networks. All Rights Reserved.
      </div>
    </footer>
  );
}
