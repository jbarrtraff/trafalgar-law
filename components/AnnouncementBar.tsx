import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <div className="bg-brand-gold text-brand-black text-xs font-bold uppercase tracking-widest py-2 px-4 text-center flex flex-col sm:flex-row items-center justify-center gap-2">
      <span>Free Consultation — No Fee Unless We Win</span>
      <span className="hidden sm:inline">|</span>
      <a
        href="tel:+17372912767"
        className="hover:underline font-black tracking-wider"
      >
        Call 24/7: (737) 291-2767
      </a>
      <span className="hidden sm:inline">|</span>
      <Link href="/contact" className="underline hover:no-underline">
        Start Your Case →
      </Link>
    </div>
  );
}
