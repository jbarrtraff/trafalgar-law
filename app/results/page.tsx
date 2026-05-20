import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Results | Austin Personal Injury Verdicts & Settlements | Trafalgar Law",
  description:
    "View Trafalgar Law's personal injury case results and settlements across Austin and San Antonio, TX. Car accidents, slip and fall, wrongful death, and more. No fee unless we win.",
};

const results = [
  {
    amount: "UPDATE WITH YOUR RESULT",
    type: "Vehicle Collision",
    description: "Client seriously injured in a multi-vehicle collision on I-35 in Austin. Recovered full compensation for medical expenses, lost wages, and pain and suffering.",
    location: "Austin, TX",
  },
  {
    amount: "UPDATE WITH YOUR RESULT",
    type: "Wrongful Death",
    description: "Family of deceased recovered damages following fatal crash caused by distracted driver. Settlement covered funeral costs, loss of financial support, and family's emotional anguish.",
    location: "Travis County, TX",
  },
  {
    amount: "UPDATE WITH YOUR RESULT",
    type: "Slip & Fall",
    description: "Client slipped on unmarked wet floor at major retailer, sustaining serious knee injury requiring surgery. Property owner held fully accountable.",
    location: "San Antonio, TX",
  },
  {
    amount: "UPDATE WITH YOUR RESULT",
    type: "Commercial Accident",
    description: "Construction worker injured by defective equipment on job site. Recovered compensation beyond workers' compensation through third-party liability claim.",
    location: "Austin, TX",
  },
  {
    amount: "UPDATE WITH YOUR RESULT",
    type: "Pedestrian Accident",
    description: "Pedestrian struck in crosswalk by driver who ran a red light. Client suffered fractures and required extended rehabilitation. Driver held fully liable.",
    location: "Austin, TX",
  },
];

export default function ResultsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-charcoal border-b border-brand-cream/10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-4">
            Our Track Record
          </p>
          <h1 className="text-5xl sm:text-6xl font-serif font-bold text-brand-cream mb-6">
            Case Results
          </h1>
          <div className="w-16 h-0.5 bg-brand-gold mb-8" />
          <p className="text-brand-cream/70 text-lg leading-relaxed max-w-2xl">
            At Trafalgar Law, results speak louder than promises. Below are
            examples of recoveries we have secured for our clients across
            Austin and San Antonio, Texas.
          </p>
          <p className="text-brand-gray text-xs mt-4 max-w-2xl">
            Past results do not guarantee a similar outcome in your case.
            Every case is unique and depends on its specific facts and circumstances.
          </p>
        </div>
      </section>

      {/* Results grid */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((r, i) => (
              <div
                key={i}
                className="bg-brand-charcoal border border-brand-cream/10 p-8 flex flex-col"
              >
                <div className="text-brand-gold font-serif font-bold text-3xl mb-2">
                  {r.amount}
                </div>
                <div className="text-brand-cream text-xs uppercase tracking-widest font-bold mb-4 border-b border-brand-cream/10 pb-4">
                  {r.type}
                </div>
                <p className="text-brand-cream/60 text-sm leading-relaxed flex-1 mb-4">
                  {r.description}
                </p>
                <div className="flex items-center gap-2 text-brand-gray text-xs">
                  <span>📍</span>
                  <span>{r.location}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-brand-charcoal border border-brand-gold/30 p-6 max-w-2xl">
            <p className="text-brand-cream/60 text-xs leading-relaxed">
              <strong className="text-brand-cream">Disclaimer:</strong> Past
              results do not guarantee a similar outcome in your case. Each
              case is unique and results depend on the specific facts,
              evidence, and applicable law. The amounts shown represent gross
              settlements or verdicts before attorney fees and costs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-gold">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-brand-black mb-4">
            Let Us Fight For Your Recovery
          </h2>
          <p className="text-brand-black/70 mb-8">
            Free consultation. No fee unless we win.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-brand-black hover:bg-brand-charcoal text-brand-cream font-bold text-sm px-10 py-4 uppercase tracking-widest transition-colors"
          >
            Start Your Free Case Review
          </Link>
        </div>
      </section>
    </>
  );
}
