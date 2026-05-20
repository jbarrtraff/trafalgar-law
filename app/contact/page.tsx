import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Free Consultation | Contact Trafalgar Law — Austin Personal Injury",
  description:
    "Contact Trafalgar Law for a free, confidential personal injury consultation. Serving Austin and San Antonio, TX. No fee unless we win.",
};

const contactInfo = [
  { label: "Phone", value: "(737) 291-2767", href: "tel:+17372912767" },
  { label: "Location", value: "Austin, Texas", href: null },
  { label: "Also Serving", value: "San Antonio, TX", href: null },
  { label: "Hours", value: "Available 24/7", href: null },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-charcoal border-b border-brand-cream/10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-4">
            Get Started
          </p>
          <h1 className="text-5xl sm:text-6xl font-serif font-bold text-brand-cream mb-6">
            Free Consultation
          </h1>
          <div className="w-16 h-0.5 bg-brand-gold mb-8" />
          <p className="text-brand-cream/70 text-lg leading-relaxed max-w-xl">
            Tell us what happened. We will review your case for free and let
            you know exactly where you stand. No pressure, no obligation.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-brand-cream font-serif text-2xl font-bold mb-8">
                Request Your Free Case Review
              </h2>
              <ContactForm />
            </div>

            {/* Info sidebar */}
            <div className="space-y-8">
              <div className="bg-brand-charcoal border border-brand-cream/10 p-8">
                <h3 className="text-brand-cream font-serif text-xl font-bold mb-6">
                  Contact Information
                </h3>
                <ul className="space-y-5">
                  {contactInfo.map((item) => (
                    <li key={item.label}>
                      <p className="text-brand-gold text-xs uppercase tracking-widest mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-brand-cream hover:text-brand-gold transition-colors font-semibold"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-brand-cream font-semibold">
                          {item.value}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-brand-charcoal border border-brand-gold/30 p-8">
                <h3 className="text-brand-cream font-serif text-lg font-bold mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  {[
                    "We review your case details",
                    "We explain your legal options honestly",
                    "No pressure, no obligation",
                    "Completely free and confidential",
                    "You pay nothing unless we win",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-brand-cream/70 text-sm"
                    >
                      <span className="text-brand-gold mt-0.5 shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-brand-gold p-8 text-center">
                <p className="text-brand-black font-serif text-lg font-bold mb-2">
                  Prefer to call?
                </p>
                <a
                  href="tel:+17372912767"
                  className="text-brand-black font-bold text-xl hover:underline"
                >
                  (737) 291-2767
                </a>
                <p className="text-brand-black/70 text-xs mt-2 uppercase tracking-wide">
                  Available 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
