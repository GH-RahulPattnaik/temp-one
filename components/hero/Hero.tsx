"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/container/Container";
import Button from "@/components/ui/button/Button";

export default function Hero() {
  return (
    <section className="bg-[#F8F8F3] py-16 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="mb-4 inline-flex rounded-full bg-[#E9F5E8] px-4 py-2 text-sm font-semibold text-[#234D20]">
              🌿 100% Organic & Fresh
            </span>

            <h1 className="mt-4 text-5xl font-bold leading-tight text-gray-900 lg:text-7xl">
              Fresh.
              <br />
              Organic.
              <br />
              Delivered.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
              Discover fresh fruits, vegetables, bakery, dairy, and pantry
              essentials delivered straight to your doorstep.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg">
                Shop Now
                <ArrowRight size={18} />
              </Button>

              <Button variant="outline" size="lg">
                Explore Products
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-8">
              <div>
                <h3 className="text-3xl font-bold">15K+</h3>
                <p className="text-sm text-gray-500">Happy Customers</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">500+</h3>
                <p className="text-sm text-gray-500">Fresh Products</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">4.9★</h3>
                <p className="text-sm text-gray-500">Customer Rating</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[40px] bg-[#EAF5E3] p-6">
              <Image
                src="/assets/hero/hero.png"
                alt="Fresh Organic Food"
                width={700}
                height={700}
                priority
                className="mx-auto object-contain"
              />
            </div>

            <div className="absolute -left-5 top-8 rounded-2xl bg-white p-4 shadow-xl">
              <p className="text-sm text-gray-500">Daily Fresh</p>
              <h4 className="font-bold">Farm to Home</h4>
            </div>

            <div className="absolute -bottom-5 right-6 rounded-2xl bg-white p-4 shadow-xl">
              <p className="text-sm text-gray-500">Free Delivery</p>
              <h4 className="font-bold">Over $50</h4>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}