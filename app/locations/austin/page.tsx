import type { Metadata } from "next";
import Link from "next/link";
import { practiceAreas } from "@/lib/practice-areas";

export const metadata: Metadata = {
  title: "Austin Personal Injury Lawyer | Trafalgar Law",
  description:
    "Injured in Austin, TX? Trafalgar Law is Austin's personal injury firm. Car accidents, slip and fall, wrongful death, and more. Free consultation — no fee unless we win.",
  keywords: [
    "Austin personal injury lawyer",
    "Austin car accident attorney",
    "Austin slip and fall lawyer",
    "personal injury attorney Austin TX",
    "Austin wrongful death attorney",
  ],
};

export default function AustinPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-charcoal border-b border-brand-cream/10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-4">
            Serving Austin, Texas
          </p>
          <h1 className="text-5xl sm:text-6xl font-serif font-bold text-brand-cream mb-6 max-w-3xl">
            Austin Personal Injury Lawyer
          </h1>
          <div className="w-16 h-0.5 bg-brand-gold mb-8" />
          <p className="text-brand-cream/70 text-lg leading-relaxed max-w-2xl">
            Trafalgar Law is headquartered in Austin, Texas. We know this
            city — its roads, its courts, and the insurance companies that
            operate here. When you are injured in Austin, we are your team.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block bg-brand-gold hover:bg-brand-gold-light text-brand-black font-bold text-sm px-10 py-4 uppercase tracking-widest transition-colors duration-200"
            >
              Free Austin Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Why Austin */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-serif font-bold text-brand-cream mb-6">
                Fighting for Austin Injury Victims
              </h2>
              <div className="space-y-5 text-brand-cream/70 leading-relaxed">
                <p>
                  Austin is one of the fastest-growing cities in the United
                  States, and with that growth comes increased traffic,
                  construction activity, and unfortunately — accidents.
                  I-35, Mopac, and the growing network of city roads see
                  serious collisions every day.
                </p>
                <p>
                  Trafalgar Law has deep roots in the Austin legal community.
                  Attorney Joseph Barrientos is familiar with Travis County
                  courts, local insurance adjusters, and the specific
                  challenges Austin injury victims face. That local knowledge
                  translates directly into better outcomes for our clients.
                </p>
                <p>
                  Whether your accident happened on I-35, South Congress,
                  Downtown Austin, or anywhere in the surrounding area, we
                  are ready to take your case. The consultation is free and
                  you pay nothing unless we win.
                </p>
              </div>
            </div>
            <div className="bg-brand-charcoal border border-brand-cream/10 p-8">
              <h3 className="text-brand-cream font-serif text-xl font-bold mb-6">
                Austin Accident Statistics
              </h3>
              <ul className="space-y-5">
                {[
                  "Austin sees thousands of vehicle collisions each year on high-traffic corridors like I-35 and US-183.",
                  "Travis County courts handle a high volume of personal injury claims — local experience matters.",
                  "Texas law allows injury victims to recover compensation for medical expenses, lost wages, pain and suffering, and more.",
                  "The Texas statute of limitations for personal injury is 2 years — act before it is too late.",
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
            Austin Personal Injury Cases We Handle
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
            Injured in Austin? Call Trafalgar Law.
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
