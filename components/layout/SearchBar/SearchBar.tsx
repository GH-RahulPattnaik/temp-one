"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <form className="flex h-12 w-full items-center overflow-hidden rounded-full border border-gray-200 bg-white shadow-sm transition-all duration-300 focus-within:border-[#234D20] focus-within:ring-2 focus-within:ring-[#234D20]/10">
      <input
        type="text"
        placeholder="Search for products..."
        className="h-full flex-1 bg-transparent px-5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
      />

      <button
        type="submit"
        className="flex h-12 w-12 items-center justify-center bg-[#234D20] text-white transition hover:bg-[#1d401b]"
      >
        <Search size={20} />
      </button>
    </form>
  );
}