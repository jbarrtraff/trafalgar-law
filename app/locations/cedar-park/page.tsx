import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cedar Park Personal Injury Lawyer | Trafalgar Law",
  description: "Injured in Cedar Park, TX? Trafalgar Law fights for personal injury victims in Cedar Park and Williamson County. Free consultation — no fee unless we win.",
  keywords: ["Cedar Park personal injury lawyer", "Cedar Park car accident attorney", "Williamson County injury lawyer", "Cedar Park TX personal injury"],
};

export default function CedarParkPage() {
  return (
    <>
      <section className="bg-brand-charcoal border-b border-brand-cream/10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-4">Serving Cedar Park, Texas</p>
          <h1 className="text-5xl sm:text-6xl font-serif font-bold text-brand-cream mb-6 max-w-3xl">
            Cedar Park Personal Injury Lawyer
          </h1>
          <div className="w-16 h-0.5 bg-brand-gold mb-8" />
          <p className="text-brand-cream/70 text-lg leading-relaxed max-w-2xl">
            Trafalgar Law serves personal injury victims in Cedar Park and throughout Williamson County. From accidents on US-183A to slip and fall injuries at local businesses, we handle it all — with no fee unless we win.
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
          <h2 className="text-3xl font-serif font-bold text-brand-cream mb-6">Personal Injury Cases in Cedar Park, TX</h2>
          <div className="space-y-5 text-brand-cream/70 leading-relaxed">
            <p>Cedar Park has grown rapidly, with high traffic volumes on US-183A, Whitestone Boulevard, and the surrounding highway network. Vehicle collisions, construction accidents, and premises liability incidents are increasingly common in the area.</p>
            <p>Trafalgar Law has experience representing injury victims throughout Williamson County, including Cedar Park. We know how to build strong cases against negligent drivers, property owners, and businesses in this area.</p>
            <p>The Texas statute of limitations gives you 2 years to file a personal injury claim. Contact Trafalgar Law today — your consultation is free and you owe nothing unless we win.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-charcoal border-t border-brand-cream/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-serif font-bold text-brand-cream mb-4">Also Serving Nearby Cities</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {["Austin", "Round Rock", "Georgetown", "Leander", "Pflugerville"].map((city) => (
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
