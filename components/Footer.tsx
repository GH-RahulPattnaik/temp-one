import { BsCursor } from "react-icons/bs";
import React from "react";
import MyMarquee from "./Marquee";
import Link from "next/link";
import { IoMailOpen } from "react-icons/io5";
import { FaChevronDown, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return <div>
        {/* NEWSLETTER */}
        <section className="md:px-8 px-4 py-8 mt-4 mb-6">
            <div className="rounded-xl py-4 bg-black w-full h-96 flex gap-5 justify-center items-center flex-col dark:bg-gray-900 text-white">
            <BsCursor  size={50} className="dark:text-black"/>
            <h2 className="text-3xl font-semibold text-center">Sign up for our newsletter</h2>
            <div className="flex md:w-1/2 w-full justify-center">
                <input type="email" placeholder="Enter your email" className="p-3 md:text-lg text-xs bg-transparent border-2 border-white rounded-l-lg"/>
                <button className="py-2 font-semibold md:text-lg text-sm border-2 p-3 border-white rounded-r-full hover:border-black border-l-0">Submit</button>
            </div>
            <p className="text-center md:px-0 px-4 text-slate-400 font-semibold md:text-base text-xs">Use this text to share information about your brand with your customers. <br /> Describe a product, share announcements, or welcome customers to your store.</p>
            </div>
        </section>

        <MyMarquee content={"text"}/>
        
        {/* Footer */}
        <section className="max-h-max w-full border-t border-b my-3 md:px-8 px-2 text-black">
            <div className="flex items-start justify-between flex-wrap">
                <div className="md:w-1/5 w-full p-4 flex flex-col gap-5">
                    <h4 className="text-2xl font-semibold">LOCAL</h4>
                    <p className="text-gray-500">Fresh products from local producers, delivered directly to your front door, daily.</p>
                    <div className="flex gap-5 items-center">
                        <IoMailOpen size={28} className="hover:text-green-700 dark:text-white" />
                        <FaFacebookF size={28} className="hover:text-green-700 dark:text-white" />
                        <FaXTwitter size={28} className="hover:text-green-700 dark:text-white" />
                    </div>
                </div>
                <div className="md:w-1/5 w-full p-4 flex flex-col gap-5">
                    <h4 className="text-2xl font-semibold">Popular categories</h4>
                    <div className="flex flex-col gap-2">
                        <Link href={"#"} className="underline hover:text-green-700">Breads & Bakery</Link>
                        <Link href={"#"} className="underline hover:text-green-700">Fruits</Link>
                        <Link href={"#"} className="underline hover:text-green-700">Vegetables</Link>
                        <Link href={"#"} className="underline hover:text-green-700">Noodles</Link>
                        <Link href={"#"} className="underline hover:text-green-700">Masalas</Link>
                        <Link href={"#"} className="underline hover:text-green-700">Powder</Link>
                    </div>
                </div>
                <div className="md:w-1/5 w-full p-4 flex flex-col gap-5">
                    <h4 className="text-2xl font-semibold">Main Store</h4>
                    <p>Bhubaneswer, Odisha</p>
                </div>
                <div className="md:w-1/5 w-full p-4 flex flex-col gap-5">
                    <h4 className="text-2xl font-semibold">Quick links</h4>
                    <div className="flex flex-col gap-2">
                        <Link href={"#"} className="underline hover:text-green-700">Search</Link>
                        <Link href={"#"} className="underline hover:text-green-700">About Us</Link>
                        <Link href={"#"} className="underline hover:text-green-700">Delivery</Link>
                        <Link href={"#"} className="underline hover:text-green-700">Our stores</Link>
                    </div>
                </div>
            </div>

        </section>

        <div className="px-4  py-5 flex items-center gap-5 md:justify-between flex-wrap">
          <p className="text-base font-medium">Copyright © 2024 <u className="underline">Local Theme Light Demo.Powered by Shopify</u></p>
          <Link href={"#"} className="flex items-center gap-3">English <FaChevronDown size={14}/></Link>
        </div>        

    </div>
}