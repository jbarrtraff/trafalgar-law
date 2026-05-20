import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { practiceAreas } from "@/lib/practice-areas";

export const metadata: Metadata = {
  title: "Austin Personal Injury Lawyer | Trafalgar Law — Committed. Relentless. Strategic.",
  description:
    "Trafalgar Law is Austin's trusted personal injury law firm. We fight for victims of car accidents, slip and fall, wrongful death, and more across Austin and San Antonio, TX. Free consultation — no fee unless we win.",
};

const trustItems = [
  { label: "No Fee Unless We Win", icon: "⚖️" },
  { label: "Free Consultations", icon: "📞" },
  { label: "Austin & San Antonio", icon: "📍" },
  { label: "Available 24/7", icon: "🕐" },
];

const whyUs = [
  {
    title: "Relentless Advocacy",
    body: "We don't settle for lowball offers. We build the strongest possible case and fight until you receive the compensation you truly deserve.",
  },
  {
    title: "Personal Attention",
    body: "You're not a case number here. Attorney Joseph Barrientos personally oversees your case and keeps you informed every step of the way.",
  },
  {
    title: "No Upfront Costs",
    body: "Our contingency fee model means you pay nothing unless we win. There is no risk to you — only the chance at justice.",
  },
  {
    title: "Local Texas Knowledge",
    body: "We know the Austin and San Antonio courts, judges, and insurance adjusters. Local expertise makes a real difference in your outcome.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center bg-brand-black overflow-hidden">
        {/* Aerial Austin background */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/austin-aerial.jpg"
            alt="Aerial view of Austin, Texas"
            fill
            className="object-cover object-center opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/90 to-brand-black/50" />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-gold hidden lg:block" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-6">
              Austin & San Antonio Personal Injury Attorney
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-brand-cream leading-tight mb-8">
              Injured?
              <br />
              <span className="text-brand-gold">We Fight</span>
              <br />
              For You.
            </h1>
            <p className="text-brand-cream/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
              Trafalgar Law is a personal injury firm serving Austin and San
              Antonio, Texas. Car accidents, slip and fall, wrongful death —
              we take on the insurance companies so you can focus on healing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-brand-gold hover:bg-brand-gold-light text-brand-black font-bold text-sm px-10 py-4 uppercase tracking-widest text-center transition-colors duration-200"
              >
                Free Consultation
              </Link>
              <Link
                href="/practice-areas"
                className="border border-brand-cream/30 hover:border-brand-gold text-brand-cream hover:text-brand-gold text-sm px-10 py-4 uppercase tracking-widest text-center transition-colors duration-200"
              >
                Our Practice Areas
              </Link>
            </div>
            <p className="text-brand-gray text-sm mt-6 italic">
              No fee unless we win. Confidential and free.
            </p>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-brand-charcoal border-y border-brand-cream/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-brand-cream text-sm font-semibold uppercase tracking-wide">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-4">
              How We Can Help
            </p>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-brand-cream">
              Practice Areas
            </h2>
            <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/practice-areas/${area.slug}`}
                className="group bg-brand-charcoal border border-brand-cream/10 hover:border-brand-gold/50 p-8 transition-all duration-300"
              >
                <span className="text-3xl mb-5 block">{area.icon}</span>
                <h3 className="text-brand-cream text-xl font-serif font-semibold mb-3 group-hover:text-brand-gold transition-colors">
                  {area.shortTitle}
                </h3>
                <p className="text-brand-gray text-sm leading-relaxed mb-5">
                  {area.description}
                </p>
                <span className="text-brand-gold text-xs uppercase tracking-widest">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-brand-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-4">
                Why Trafalgar Law
              </p>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-brand-cream mb-6">
                Committed.
                <br />
                Relentless.
                <br />
                Strategic.
              </h2>
              <p className="text-brand-cream/70 text-lg leading-relaxed mb-8">
                When you are injured, the insurance company has an army of
                adjusters and lawyers working against you. You need a firm
                that fights back with equal force — and wins.
              </p>
              <Link
                href="/about"
                className="inline-block border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black text-sm px-8 py-3 uppercase tracking-widest transition-colors duration-200"
              >
                Meet Attorney Barrientos
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyUs.map((item) => (
                <div
                  key={item.title}
                  className="bg-brand-black border border-brand-cream/10 p-6"
                >
                  <div className="w-8 h-0.5 bg-brand-gold mb-4" />
                  <h3 className="text-brand-cream font-serif font-semibold text-lg mb-3">
                    {item.title}
                  </h3>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-4">
              Where We Serve
            </p>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-brand-cream">
              Serving the Heart of Texas
            </h2>
            <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              href="/locations/austin"
              className="group relative overflow-hidden border border-brand-cream/10 hover:border-brand-gold/50 p-12 text-center transition-all duration-300 min-h-[320px] flex flex-col justify-end"
            >
              <Image
                src="/images/austin-skyline.jpg"
                alt="Austin Texas skyline"
                fill
                className="object-cover object-center opacity-40 group-hover:opacity-50 transition-opacity duration-500 group-hover:scale-105 scale-100 transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent" />
              <div className="relative z-10">
                <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-4">Primary Office</p>
                <h3 className="text-brand-cream text-3xl font-serif font-bold mb-4">Austin, TX</h3>
                <p className="text-brand-gray text-sm leading-relaxed mb-6">
                  Our home base. We know Austin roads, courts, and insurance adjusters better than anyone.
                </p>
                <span className="text-brand-gold text-xs uppercase tracking-widest">Austin Injury Claims →</span>
              </div>
            </Link>
            <Link
              href="/locations/san-antonio"
              className="group relative overflow-hidden border border-brand-cream/10 hover:border-brand-gold/50 p-12 text-center transition-all duration-300 min-h-[320px] flex flex-col justify-end"
            >
              <Image
                src="/images/austin-360bridge.jpg"
                alt="Austin Texas 360 bridge"
                fill
                className="object-cover object-center opacity-40 group-hover:opacity-50 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent" />
              <div className="relative z-10">
                <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-4">Also Serving</p>
                <h3 className="text-brand-cream text-3xl font-serif font-bold mb-4">San Antonio, TX</h3>
                <p className="text-brand-gray text-sm leading-relaxed mb-6">
                  Trafalgar Law is proud to extend our relentless representation to injury victims across San Antonio.
                </p>
                <span className="text-brand-gold text-xs uppercase tracking-widest">San Antonio Injury Claims →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-gold">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-brand-black mb-6">
            Ready to Fight for Your Rights?
          </h2>
          <p className="text-brand-black/70 text-lg leading-relaxed mb-10">
            Every day you wait, evidence disappears and deadlines approach.
            Call Trafalgar Law today for a free, no-obligation consultation.
            You pay nothing unless we win.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-brand-black hover:bg-brand-charcoal text-brand-cream font-bold text-sm px-10 py-4 uppercase tracking-widest text-center transition-colors duration-200"
            >
              Free Consultation
            </Link>
            <a
              href="tel:+17372912767"
              className="border-2 border-brand-black text-brand-black font-bold text-sm px-10 py-4 uppercase tracking-widest text-center hover:bg-brand-black hover:text-brand-cream transition-colors duration-200"
            >
              Call (737) 291-2767
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
