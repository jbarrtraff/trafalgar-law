import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Round Rock Personal Injury Lawyer | Trafalgar Law",
  description: "Injured in Round Rock, TX? Trafalgar Law fights for personal injury victims in Round Rock and Williamson County. Free consultation — no fee unless we win.",
  keywords: ["Round Rock personal injury lawyer", "Round Rock car accident attorney", "Williamson County personal injury", "Round Rock TX injury lawyer"],
};

export default function RoundRockPage() {
  return (
    <>
      <section className="bg-brand-charcoal border-b border-brand-cream/10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-4">Serving Round Rock, Texas</p>
          <h1 className="text-5xl sm:text-6xl font-serif font-bold text-brand-cream mb-6 max-w-3xl">
            Round Rock Personal Injury Lawyer
          </h1>
          <div className="w-16 h-0.5 bg-brand-gold mb-8" />
          <p className="text-brand-cream/70 text-lg leading-relaxed max-w-2xl">
            Trafalgar Law represents personal injury victims in Round Rock and throughout Williamson County, Texas. If you were injured in a car accident, slip and fall, or any other accident caused by negligence, we are ready to fight for you.
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
          <h2 className="text-3xl font-serif font-bold text-brand-cream mb-6">Injury Claims in Round Rock, TX</h2>
          <div className="space-y-5 text-brand-cream/70 leading-relaxed">
            <p>Round Rock is one of the fastest-growing cities in Texas, with heavy traffic on US-79, I-35, and the growing network of roads connecting the city to Austin. With that growth comes an increase in vehicle collisions, commercial accidents, and other injury-causing events.</p>
            <p>Trafalgar Law handles personal injury cases throughout Williamson County, including Round Rock, Georgetown, Cedar Park, and Leander. We understand the local courts and are familiar with the challenges injury victims face in this area.</p>
            <p>If you were injured in Round Rock, do not wait. Texas law gives you only 2 years to file a personal injury claim. Contact us today for a free, confidential consultation — you pay nothing unless we win.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-charcoal border-t border-brand-cream/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-serif font-bold text-brand-cream mb-4">Also Serving Nearby Cities</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {["Austin", "Georgetown", "Cedar Park", "Pflugerville", "Kyle"].map((city) => (
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
