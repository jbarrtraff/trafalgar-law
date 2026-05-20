"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Locations", href: "#locations" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-black/95 backdrop-blur border-b border-brand-cream/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-white.png"
              alt="Trafalgar Law Personal Injury"
              width={240}
              height={72}
              className="h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-brand-cream/80 hover:text-brand-gold text-sm tracking-wide uppercase transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Phone + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+17372912767"
              className="text-brand-gold font-bold text-sm tracking-wide hover:text-brand-gold-light transition-colors"
            >
              (737) 291-2767
            </a>
            <Link
              href="/contact"
              className="bg-brand-gold hover:bg-brand-gold-light text-brand-black font-bold text-sm px-6 py-3 uppercase tracking-widest transition-colors duration-200"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-brand-cream p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-brand-cream transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 bg-brand-cream transition-all duration-300 ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 bg-brand-cream transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-brand-charcoal border-t border-brand-cream/10 px-4 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-brand-cream/80 hover:text-brand-gold text-sm uppercase tracking-widest transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 bg-brand-gold text-brand-black font-bold text-sm px-6 py-3 uppercase tracking-widest text-center"
            onClick={() => setOpen(false)}
          >
            Free Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
