import Link from "next/link";

export default function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden grid grid-cols-2 border-t border-brand-cream/20">
      <a
        href="tel:+17372912767"
        className="bg-brand-charcoal text-brand-cream font-bold text-sm uppercase tracking-widest py-4 text-center hover:bg-brand-gold hover:text-brand-black transition-colors"
      >
        📞 Call Now
      </a>
      <Link
        href="/contact"
        className="bg-brand-gold text-brand-black font-bold text-sm uppercase tracking-widest py-4 text-center hover:bg-brand-gold-light transition-colors"
      >
        Free Consultation
      </Link>
    </div>
  );
}
