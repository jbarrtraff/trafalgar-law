import type { Metadata } from "next";
import Link from "next/link";
import { practiceAreas } from "@/lib/practice-areas";

export const metadata: Metadata = {
  title: "San Antonio Personal Injury Lawyer | Trafalgar Law",
  description:
    "Injured in San Antonio, TX? Trafalgar Law fights for personal injury victims across San Antonio. Car accidents, slip and fall, wrongful death, and more. Free consultation.",
  keywords: [
    "San Antonio personal injury lawyer",
    "San Antonio car accident attorney",
    "San Antonio slip and fall lawyer",
    "personal injury attorney San Antonio TX",
    "San Antonio wrongful death attorney",
  ],
};

export default function SanAntonioPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-charcoal border-b border-brand-cream/10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-4">
            Serving San Antonio, Texas
          </p>
          <h1 className="text-5xl sm:text-6xl font-serif font-bold text-brand-cream mb-6 max-w-3xl">
            San Antonio Personal Injury Lawyer
          </h1>
          <div className="w-16 h-0.5 bg-brand-gold mb-8" />
          <p className="text-brand-cream/70 text-lg leading-relaxed max-w-2xl">
            Trafalgar Law proudly extends its relentless personal injury
            representation to victims across San Antonio. No matter where
            your accident occurred, we fight hard to get you the compensation
            you deserve.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block bg-brand-gold hover:bg-brand-gold-light text-brand-black font-bold text-sm px-10 py-4 uppercase tracking-widest transition-colors duration-200"
            >
              Free San Antonio Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Why San Antonio */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-serif font-bold text-brand-cream mb-6">
                Representing San Antonio Injury Victims
              </h2>
              <div className="space-y-5 text-brand-cream/70 leading-relaxed">
                <p>
                  San Antonio is the second-largest city in Texas, and its
                  highways — including I-10, I-35, Loop 410, and US-90 —
                  are some of the most congested in the state. Accidents
                  happen every day, and when they do, victims deserve
                  powerful legal representation.
                </p>
                <p>
                  Trafalgar Law represents San Antonio injury victims with
                  the same relentless commitment we bring to every case.
                  We handle vehicle collisions, slip and fall accidents,
                  pedestrian injuries, commercial accidents, and wrongful
                  death claims throughout Bexar County.
                </p>
                <p>
                  Insurance companies in San Antonio are experienced at
                  minimizing claims. Trafalgar Law knows their playbook and
                  we fight back. Your consultation is free and confidential —
                  and you pay nothing unless we win.
                </p>
              </div>
            </div>
            <div className="bg-brand-charcoal border border-brand-cream/10 p-8">
              <h3 className="text-brand-cream font-serif text-xl font-bold mb-6">
                Why You Need a Lawyer After an Accident
              </h3>
              <ul className="space-y-5">
                {[
                  "Insurance companies have adjusters whose job is to pay you as little as possible. An attorney levels the playing field.",
                  "Texas's 2-year statute of limitations for personal injury claims means time is critical — contact us right away.",
                  "A lawyer can identify all liable parties and insurance policies you may not know about.",
                  "Most personal injury attorneys, including Trafalgar Law, work on contingency — no cost to you unless we win.",
                ].map((fact, i) => (
                  <li key={i} className="flex items-start gap-3 text-brand-cream/70 text-sm">
                    <span className="text-brand-gold shrink-0 mt-0.5">→</span>
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Practice areas */}
      <section className="py-20 bg-brand-charcoal border-t border-brand-cream/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-brand-cream font-serif text-3xl font-bold mb-10 text-center">
            San Antonio Cases We Handle
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {practiceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/practice-areas/${area.slug}`}
                className="group bg-brand-black border border-brand-cream/10 hover:border-brand-gold/50 p-6 transition-all"
              >
                <span className="text-2xl mb-3 block">{area.icon}</span>
                <h3 className="text-brand-cream font-serif font-semibold mb-1 group-hover:text-brand-gold transition-colors">
                  {area.shortTitle}
                </h3>
                <p className="text-brand-gray text-xs leading-relaxed">
                  {area.tagline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-gold">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-brand-black mb-4">
            Injured in San Antonio? Call Trafalgar Law.
          </h2>
          <p className="text-brand-black/70 mb-8">
            Free consultation. No fee unless we win. Available 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-brand-black hover:bg-brand-charcoal text-brand-cream font-bold text-sm px-10 py-4 uppercase tracking-widest transition-colors"
            >
              Free Consultation
            </Link>
            <a
              href="tel:+15125550100"
              className="border-2 border-brand-black text-brand-black font-bold text-sm px-10 py-4 uppercase tracking-widest hover:bg-brand-black hover:text-brand-cream transition-colors"
            >
              Call (512) 555-0100
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
