import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Georgetown TX Personal Injury Lawyer | Trafalgar Law",
  description: "Injured in Georgetown, TX? Trafalgar Law fights for personal injury victims in Georgetown and Williamson County. Free consultation — no fee unless we win.",
  keywords: ["Georgetown TX personal injury lawyer", "Georgetown car accident attorney", "Williamson County personal injury attorney"],
};

export default function GeorgetownPage() {
  return (
    <>
      <section className="bg-brand-charcoal border-b border-brand-cream/10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-4">Serving Georgetown, Texas</p>
          <h1 className="text-5xl sm:text-6xl font-serif font-bold text-brand-cream mb-6 max-w-3xl">
            Georgetown Personal Injury Lawyer
          </h1>
          <div className="w-16 h-0.5 bg-brand-gold mb-8" />
          <p className="text-brand-cream/70 text-lg leading-relaxed max-w-2xl">
            Trafalgar Law proudly serves injury victims in Georgetown, Texas and throughout Williamson County. Whether your accident happened on I-35, SH-130, or at a local property, we fight to get you the full compensation you deserve.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="inline-block bg-brand-gold hover:bg-brand-gold-light text-brand-black font-bold text-sm px-10 py-4 uppercase tracking-widest transition-colors">
              Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-serif font-bold text-brand-cream mb-6">Personal Injury Cases in Georgetown, TX</h2>
          <div className="space-y-5 text-brand-cream/70 leading-relaxed">
            <p>Georgetown is one of the fastest-growing cities in the United States, and its roads — particularly I-35 and SH-130 — see significant traffic volumes. The rapid pace of construction also creates elevated risks for workplace and commercial accidents in the area.</p>
            <p>Trafalgar Law represents injury victims throughout Williamson County. We handle cases involving vehicle collisions, slip and fall accidents, pedestrian injuries, and wrongful death, pursuing maximum compensation on your behalf.</p>
            <p>Remember: Texas law gives you just 2 years from the date of your injury to file a claim. Contact Trafalgar Law today for a free consultation — you pay nothing unless we win your case.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-charcoal border-t border-brand-cream/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-serif font-bold text-brand-cream mb-4">Also Serving Nearby Cities</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {["Austin", "Round Rock", "Cedar Park", "Leander", "San Marcos"].map((city) => (
              <Link key={city} href={`/locations/${city.toLowerCase().replace(" ", "-")}`}
                className="text-brand-gold hover:underline text-sm uppercase tracking-widest">
                {city}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
