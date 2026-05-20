import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "San Marcos TX Personal Injury Lawyer | Trafalgar Law",
  description: "Injured in San Marcos, TX? Trafalgar Law fights for personal injury victims in San Marcos and Hays County. Free consultation — no fee unless we win.",
  keywords: ["San Marcos TX personal injury lawyer", "San Marcos car accident attorney", "Hays County injury lawyer", "San Marcos Texas personal injury"],
};

export default function SanMarcosPage() {
  return (
    <>
      <section className="bg-brand-charcoal border-b border-brand-cream/10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-4">Serving San Marcos, Texas</p>
          <h1 className="text-5xl sm:text-6xl font-serif font-bold text-brand-cream mb-6 max-w-3xl">
            San Marcos Personal Injury Lawyer
          </h1>
          <div className="w-16 h-0.5 bg-brand-gold mb-8" />
          <p className="text-brand-cream/70 text-lg leading-relaxed max-w-2xl">
            Trafalgar Law represents personal injury victims in San Marcos, Hays County, and the I-35 corridor between Austin and San Antonio. If you were hurt due to someone else's negligence, our team is ready to fight for you.
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
          <h2 className="text-3xl font-serif font-bold text-brand-cream mb-6">Personal Injury Cases in San Marcos, TX</h2>
          <div className="space-y-5 text-brand-cream/70 leading-relaxed">
            <p>San Marcos sits at the midpoint of one of Texas's busiest highway corridors — I-35 between Austin and San Antonio. The combination of heavy truck traffic, commuters, and a large student population creates frequent accident risks on city roads and the interstate.</p>
            <p>Trafalgar Law serves the San Marcos community and all of Hays County. Our attorneys handle vehicle collisions, slip and fall accidents, commercial accidents, and wrongful death cases, and we pursue maximum compensation regardless of the complexity of your case.</p>
            <p>Do not delay — Texas's 2-year statute of limitations is strict. Call or contact Trafalgar Law today for a free consultation. There is no fee unless we win your case.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-charcoal border-t border-brand-cream/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-serif font-bold text-brand-cream mb-4">Also Serving Nearby Cities</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {["Austin", "Kyle", "San Antonio", "Georgetown", "Round Rock"].map((city) => (
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
