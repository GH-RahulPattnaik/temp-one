"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingCart, User } from "lucide-react";

import TopBar from "../TopBar/TopBar";
import SearchBar from "../SearchBar/SearchBar";

import Container from "@/components/ui/container/Container";
import Button from "@/components/ui/button/Button";

export default function Header() {
  return (
    <>
      <TopBar />

      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
        <Container>
          <div className="flex h-20 items-center justify-between gap-8">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src="/assets/logos/local-logo.png"
                alt="Local"
                width={150}
                height={40}
                priority
              />
            </Link>

            {/* Search */}
            <div className="hidden max-w-xl flex-1 lg:block">
              <SearchBar />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                className="rounded-full p-3 transition hover:bg-gray-100"
                aria-label="Wishlist"
              >
                <Heart className="h-5 w-5" />
              </button>

              <button
                className="rounded-full p-3 transition hover:bg-gray-100"
                aria-label="Account"
              >
                <User className="h-5 w-5" />
              </button>

              <button
                className="relative rounded-full p-3 transition hover:bg-gray-100"
                aria-label="Cart"
              >
                <ShoppingCart className="h-5 w-5" />

                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#234D20] text-[10px] font-semibold text-white">
                  0
                </span>
              </button>

              <Button size="md">Shop Now</Button>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}