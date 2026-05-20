import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { practiceAreas, getPracticeArea } from "@/lib/practice-areas";
import ContactForm from "@/components/ContactForm";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return practiceAreas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) return {};
  return {
    title: area.metaTitle,
    description: area.metaDescription,
  };
}

export default async function PracticeAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) notFound();

  const others = practiceAreas.filter((a) => a.slug !== slug).slice(0, 3);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: area.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero */}
      <section className="bg-brand-charcoal border-b border-brand-cream/10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/practice-areas"
            className="text-brand-gold text-xs uppercase tracking-widest hover:underline mb-6 inline-block"
          >
            ← Practice Areas
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">{area.icon}</span>
            <p className="text-brand-gold text-xs uppercase tracking-[0.3em]">
              Personal Injury
            </p>
          </div>
          <h1 className="text-5xl sm:text-6xl font-serif font-bold text-brand-cream mb-6 max-w-2xl">
            {area.title}
          </h1>
          <div className="w-16 h-0.5 bg-brand-gold mb-6" />
          <p className="text-brand-cream/70 text-xl leading-relaxed max-w-2xl italic">
            {area.tagline}
          </p>
        </div>
      </section>

      {/* Content + Form */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              {area.body.map((para, i) => (
                <p key={i} className="text-brand-cream/70 leading-relaxed text-lg">
                  {para}
                </p>
              ))}

              {/* Key points */}
              <div className="bg-brand-charcoal border border-brand-cream/10 p-8 mt-10">
                <h2 className="text-brand-cream font-serif text-2xl font-bold mb-6">
                  Cases We Handle
                </h2>
                <ul className="space-y-3">
                  {area.keyPoints.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-brand-cream/70">
                      <span className="text-brand-gold mt-1 shrink-0">✓</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Locations note */}
              <div className="bg-brand-charcoal border border-brand-gold/30 p-6 mt-6">
                <p className="text-brand-cream/70 text-sm">
                  <span className="text-brand-gold font-semibold">Serving Austin & San Antonio.</span>{" "}
                  Trafalgar Law represents clients throughout Central and South Texas.
                  Contact us no matter where your accident occurred.
                </p>
              </div>

              {/* FAQ */}
              <div className="mt-12">
                <h2 className="text-brand-cream font-serif text-3xl font-bold mb-8">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {area.faqs.map((faq, i) => (
                    <details key={i} className="group bg-brand-charcoal border border-brand-cream/10 open:border-brand-gold/40">
                      <summary className="flex justify-between items-center cursor-pointer px-6 py-5 text-brand-cream font-semibold list-none">
                        <span>{faq.q}</span>
                        <span className="text-brand-gold text-xl group-open:rotate-45 transition-transform duration-200 shrink-0 ml-4">+</span>
                      </summary>
                      <p className="px-6 pb-5 text-brand-cream/70 leading-relaxed text-sm border-t border-brand-cream/10 pt-4">
                        {faq.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar form */}
            <div className="lg:col-span-1">
              <div className="bg-brand-charcoal border border-brand-cream/10 p-8 sticky top-28">
                <h2 className="text-brand-cream font-serif text-xl font-bold mb-2">
                  Free Case Review
                </h2>
                <p className="text-brand-gray text-sm mb-6">
                  No fee unless we win. Confidential and free.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other areas */}
      <section className="py-16 bg-brand-charcoal border-t border-brand-cream/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-brand-cream font-serif text-2xl font-bold mb-8">
            Other Practice Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {others.map((a) => (
              <Link
                key={a.slug}
                href={`/practice-areas/${a.slug}`}
                className="group bg-brand-black border border-brand-cream/10 hover:border-brand-gold/50 p-6 transition-all"
              >
                <span className="text-2xl mb-3 block">{a.icon}</span>
                <h3 className="text-brand-cream font-serif font-semibold mb-2 group-hover:text-brand-gold transition-colors">
                  {a.shortTitle}
                </h3>
                <span className="text-brand-gold text-xs uppercase tracking-widest">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
