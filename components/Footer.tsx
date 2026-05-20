import Link from "next/link";
import Image from "next/image";
import { practiceAreas } from "@/lib/practice-areas";

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal border-t border-brand-cream/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <Image
                src="/images/logo-white.png"
                alt="Trafalgar Law Personal Injury"
                width={180}
                height={55}
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-brand-gray text-sm leading-relaxed italic">
              Committed. Relentless. Strategic.
            </p>
            <p className="text-brand-gray text-sm mt-4 leading-relaxed">
              Serving Austin and San Antonio, Texas.
            </p>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-brand-cream text-xs uppercase tracking-widest font-bold mb-5">
              Practice Areas
            </h3>
            <ul className="space-y-3">
              {practiceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/practice-areas/${area.slug}`}
                    className="text-brand-gray hover:text-brand-gold text-sm transition-colors"
                  >
                    {area.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-brand-cream text-xs uppercase tracking-widest font-bold mb-5">
              Locations
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/locations/austin"
                  className="text-brand-gray hover:text-brand-gold text-sm transition-colors"
                >
                  Austin, TX
                </Link>
              </li>
              <li>
                <Link
                  href="/locations/san-antonio"
                  className="text-brand-gray hover:text-brand-gold text-sm transition-colors"
                >
                  San Antonio, TX
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-brand-cream text-xs uppercase tracking-widest font-bold mb-5">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-brand-gray">
              <li>
                <a
                  href="tel:+17372912767"
                  className="hover:text-brand-gold transition-colors"
                >
                  (737) 291-2767
                </a>
              </li>
              <li>Austin, Texas</li>
              <li>
                <Link
                  href="/contact"
                  className="text-brand-gold hover:text-brand-gold-light transition-colors font-semibold"
                >
                  Free Consultation →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-brand-cream/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-brand-gray">
          <p>
            © {new Date().getFullYear()} Trafalgar Law Personal Injury. All
            rights reserved.
          </p>
          <p className="max-w-xl text-left md:text-right">
            Attorney advertising. Prior results do not guarantee a similar
            outcome. The information on this website is for general informational
            purposes only and does not constitute legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
