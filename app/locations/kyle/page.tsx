import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kyle TX Personal Injury Lawyer | Trafalgar Law",
  description: "Injured in Kyle, TX? Trafalgar Law fights for personal injury victims in Kyle and Hays County. Free consultation — no fee unless we win.",
  keywords: ["Kyle TX personal injury lawyer", "Kyle car accident attorney", "Hays County personal injury attorney", "Kyle Texas injury lawyer"],
};

export default function KylePage() {
  return (
    <>
      <section className="bg-brand-charcoal border-b border-brand-cream/10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-4">Serving Kyle, Texas</p>
          <h1 className="text-5xl sm:text-6xl font-serif font-bold text-brand-cream mb-6 max-w-3xl">
            Kyle Personal Injury Lawyer
          </h1>
          <div className="w-16 h-0.5 bg-brand-gold mb-8" />
          <p className="text-brand-cream/70 text-lg leading-relaxed max-w-2xl">
            Trafalgar Law serves personal injury victims in Kyle, Buda, and throughout Hays County, Texas. If you were hurt in an accident caused by someone else's negligence, we are ready to fight for your full compensation.
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
          <h2 className="text-3xl font-serif font-bold text-brand-cream mb-6">Personal Injury Cases in Kyle, TX</h2>
          <div className="space-y-5 text-brand-cream/70 leading-relaxed">
            <p>Kyle has become one of Texas's fastest-growing cities, with I-35 as its main artery and new development bringing increased traffic and construction activity. Vehicle accidents and workplace injuries are common in the area.</p>
            <p>Trafalgar Law handles personal injury cases throughout Hays County, including Kyle and Buda. We understand how to navigate the local court system and how to deal with insurance companies that operate in this area.</p>
            <p>Texas law gives you 2 years from your injury date to file a claim. Do not wait — contact Trafalgar Law today for a free, no-obligation consultation. You pay nothing unless we win.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-charcoal border-t border-brand-cream/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-serif font-bold text-brand-cream mb-4">Also Serving Nearby Cities</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {["Austin", "San Marcos", "San Antonio", "Round Rock", "Georgetown"].map((city) => (
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
