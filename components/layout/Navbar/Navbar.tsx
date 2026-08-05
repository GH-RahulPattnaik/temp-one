"use client";

import Link from "next/link";
import { ChevronDown, Menu, MapPin, Truck } from "lucide-react";
import Container from "@/components/ui/container/Container";

const navItems = [
  { label: "About Us", href: "#" },
  { label: "Recipes", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Theme Features", href: "#" },
];

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-8">
            <button className="flex items-center gap-2 rounded-full bg-[#234D20] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1d401b]">
              <Menu size={18} />
              Categories
              <ChevronDown size={16} />
            </button>

            <div className="hidden items-center gap-8 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 transition hover:text-[#234D20]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="hidden items-center gap-6 lg:flex">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin size={16} className="text-[#234D20]" />
              <span>Store Locator</span>
            </div>

            <div className="h-5 w-px bg-gray-300" />

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Truck size={16} className="text-[#234D20]" />
              <span>Track Order</span>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}