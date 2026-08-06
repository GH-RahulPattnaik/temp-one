"use client";

import { testimonial } from "@/lib/data";

export function Testimonial() {
  return (
    <section className="container-x mt-20 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
        What our clients say
      </p>
      <h2 className="section-heading mt-2">Testimonials</h2>
      <blockquote className="mx-auto mt-6 max-w-2xl text-lg text-neutral-700">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <p className="mt-4 font-display text-xl text-neutral-900">{testimonial.name}</p>
      <p className="text-sm text-neutral-500">{testimonial.role}</p>
    </section>
  );
}

export function Newsletter() {
  return (
    <section className="mt-20 bg-brand py-16 text-white">
      <div className="container-x grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl">
            Sign up for our newsletter
          </h2>
          <p className="mt-3 max-w-md text-sm text-white/80">
            Use this text to share information about your brand with your customers.
            Describe a product, share announcements, or welcome customers to your store.
          </p>
        </div>
        <form
          className="flex flex-col gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="Enter your email"
            className="w-full flex-1 rounded-full border-0 px-5 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button type="submit" className="btn bg-white text-brand hover:bg-cream">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
