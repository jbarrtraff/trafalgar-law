"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/ajax/YOUR_EMAIL_HERE", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setState("success");
        form.reset();
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="_subject" value="New consultation request — Trafalgar Law" />
      <input type="hidden" name="_captcha" value="false" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-brand-cream/70 text-xs uppercase tracking-widest mb-2">
            First Name *
          </label>
          <input
            type="text"
            name="first_name"
            required
            className="w-full bg-brand-charcoal border border-brand-cream/20 text-brand-cream px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors"
            placeholder="Joseph"
          />
        </div>
        <div>
          <label className="block text-brand-cream/70 text-xs uppercase tracking-widest mb-2">
            Last Name *
          </label>
          <input
            type="text"
            name="last_name"
            required
            className="w-full bg-brand-charcoal border border-brand-cream/20 text-brand-cream px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors"
            placeholder="Smith"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-brand-cream/70 text-xs uppercase tracking-widest mb-2">
            Phone *
          </label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full bg-brand-charcoal border border-brand-cream/20 text-brand-cream px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors"
            placeholder="(512) 555-0100"
          />
        </div>
        <div>
          <label className="block text-brand-cream/70 text-xs uppercase tracking-widest mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="w-full bg-brand-charcoal border border-brand-cream/20 text-brand-cream px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-brand-cream/70 text-xs uppercase tracking-widest mb-2">
          Type of Injury *
        </label>
        <select
          name="injury_type"
          required
          className="w-full bg-brand-charcoal border border-brand-cream/20 text-brand-cream px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors"
        >
          <option value="">Select one…</option>
          <option value="Vehicle Collision">Vehicle Collision</option>
          <option value="Slip & Fall">Slip &amp; Fall</option>
          <option value="Commercial Accident">Commercial Accident</option>
          <option value="Pedestrian Accident">Pedestrian Accident</option>
          <option value="Wrongful Death">Wrongful Death</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-brand-cream/70 text-xs uppercase tracking-widest mb-2">
          Tell us what happened *
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full bg-brand-charcoal border border-brand-cream/20 text-brand-cream px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors resize-none"
          placeholder="Briefly describe your accident and injuries…"
        />
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full bg-brand-gold hover:bg-brand-gold-light disabled:opacity-60 text-brand-black font-bold text-sm px-8 py-4 uppercase tracking-widest transition-colors duration-200"
      >
        {state === "submitting" ? "Sending…" : "Request Free Consultation"}
      </button>

      {state === "success" && (
        <p className="text-green-400 text-sm text-center">
          Thank you! We will contact you within 24 hours.
        </p>
      )}
      {state === "error" && (
        <p className="text-red-400 text-sm text-center">
          Something went wrong. Please call us directly at (512) 555-0100.
        </p>
      )}

      <p className="text-brand-gray text-xs text-center">
        No fee unless we win. Confidential and free.
      </p>
    </form>
  );
}
