import type { Metadata } from "next";
import Link from "next/link";
import { practiceAreas } from "@/lib/practice-areas";

export const metadata: Metadata = {
  title: "Personal Injury Practice Areas | Austin & San Antonio TX",
  description:
    "Trafalgar Law handles vehicle collisions, slip and fall, commercial accidents, pedestrian accidents, and wrongful death cases across Austin and San Antonio, TX. Free consultation.",
};

export default function PracticeAreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-charcoal border-b border-brand-cream/10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-4">
            What We Handle
          </p>
          <h1 className="text-5xl sm:text-6xl font-serif font-bold text-brand-cream mb-6">
            Practice Areas
          </h1>
          <div className="w-16 h-0.5 bg-brand-gold mb-8" />
          <p className="text-brand-cream/70 text-lg leading-relaxed max-w-2xl">
            Trafalgar Law represents injury victims across a wide range of
            accident types. If you have been hurt due to someone else's
            negligence, we want to hear your story.
          </p>
        </div>
      </section>

      {/* Areas list */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {practiceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/practice-areas/${area.slug}`}
                className="group bg-brand-charcoal border border-brand-cream/10 hover:border-brand-gold/50 p-10 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <span className="text-4xl shrink-0">{area.icon}</span>
                  <div>
                    <h2 className="text-brand-cream text-2xl font-serif font-bold mb-3 group-hover:text-brand-gold transition-colors">
                      {area.title}
                    </h2>
                    <p className="text-brand-gray text-sm leading-relaxed mb-5">
                      {area.description}
                    </p>
                    <ul className="space-y-1.5 mb-6">
                      {area.keyPoints.slice(0, 3).map((pt) => (
                        <li
                          key={pt}
                          className="text-brand-cream/60 text-sm flex items-start gap-2"
                        >
                          <span className="text-brand-gold mt-0.5">—</span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <span className="text-brand-gold text-xs uppercase tracking-widest">
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-gold">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-brand-black mb-4">
            Not sure if you have a case?
          </h2>
          <p className="text-brand-black/70 mb-8">
            Call or contact us for a free, no-obligation consultation. We will
            review your situation and tell you exactly where you stand.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-brand-black hover:bg-brand-charcoal text-brand-cream font-bold text-sm px-10 py-4 uppercase tracking-widest transition-colors duration-200"
          >
            Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
