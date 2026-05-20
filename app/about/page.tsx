import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Attorney Joseph Barrientos | Austin Personal Injury Lawyer",
  description:
    "Meet Joseph Barrientos, the personal injury attorney behind Trafalgar Law. Serving Austin and San Antonio, TX with relentless dedication to injury victims.",
};

const values = [
  {
    title: "Committed",
    body: "Every client matters. From the first consultation to the final settlement, we are fully invested in your case and your recovery.",
  },
  {
    title: "Relentless",
    body: "Insurance companies don't intimidate us. We push hard, investigate thoroughly, and never back down from a fight you deserve to win.",
  },
  {
    title: "Strategic",
    body: "Personal injury law is complex. We build each case with precision — anticipating the opposition, eliminating weaknesses, and maximizing your outcome.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-black border-b border-brand-cream/10 py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/austin-skyline.jpg"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          >
            <source src="/videos/austin-sunset.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/90 to-brand-black/70" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Image
              src="/images/logo-white.png"
              alt="Trafalgar Law"
              width={200}
              height={60}
              className="h-16 w-auto object-contain"
            />
          </div>
          <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-4">
            About Us
          </p>
          <h1 className="text-5xl sm:text-6xl font-serif font-bold text-brand-cream mb-6 max-w-2xl">
            Meet Attorney Joseph Barrientos
          </h1>
          <div className="w-16 h-0.5 bg-brand-gold mb-8" />
          <p className="text-brand-cream/70 text-lg leading-relaxed max-w-2xl">
            A personal injury lawyer who believes injured Texans deserve the
            same aggressive, sophisticated legal representation that insurance
            companies use against them.
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-serif font-bold text-brand-cream mb-6">
                Fighting for Texans Across Austin & San Antonio
              </h2>
              <div className="space-y-5 text-brand-cream/70 leading-relaxed">
                <p>
                  Joseph Barrientos founded Trafalgar Law with a single
                  mission: to give injured Texans the relentless, intelligent
                  representation they deserve. Too often, injury victims are
                  pressured into accepting far less than their case is worth.
                  Trafalgar Law was built to change that.
                </p>
                <p>
                  With deep roots in Austin and extensive experience serving
                  clients across San Antonio, Attorney Barrientos understands
                  the Texas legal landscape — the courts, the insurance
                  companies, and the tactics used to minimize your claim.
                  He uses that knowledge to your advantage.
                </p>
                <p>
                  Whether you have been injured in a car accident, a slip and
                  fall, a commercial accident, or have lost a loved one due to
                  someone else's negligence, Trafalgar Law is prepared to fight
                  with everything it has on your behalf.
                </p>
                <p>
                  Trafalgar Law operates on a contingency fee basis — you pay
                  nothing unless we win your case. The consultation is always
                  free and confidential.
                </p>
              </div>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-block bg-brand-gold hover:bg-brand-gold-light text-brand-black font-bold text-sm px-10 py-4 uppercase tracking-widest transition-colors duration-200"
                >
                  Schedule a Free Consultation
                </Link>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-6">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-brand-charcoal border border-brand-cream/10 p-8"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-0.5 bg-brand-gold" />
                    <h3 className="text-brand-gold font-serif font-bold text-xl uppercase tracking-widest">
                      {v.title}
                    </h3>
                  </div>
                  <p className="text-brand-cream/70 leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* City photo banner */}
      <section className="relative h-64 overflow-hidden">
        <Image
          src="/images/austin-bridge.jpg"
          alt="Austin Texas bridge and skyline"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-brand-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-brand-cream font-serif text-2xl font-bold tracking-widest italic text-center px-4">
            "Committed. Relentless. Strategic."
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-charcoal border-t border-brand-cream/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-brand-cream mb-4">
            Ready to put Trafalgar Law to work for you?
          </h2>
          <p className="text-brand-gray mb-8">
            Free consultation. No fee unless we win.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-brand-gold hover:bg-brand-gold-light text-brand-black font-bold text-sm px-10 py-4 uppercase tracking-widest transition-colors duration-200"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
