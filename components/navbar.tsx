/* eslint-disable @next/next/no-img-element */
import HamburgerMenu from "@/components/MobHamBug";
import Image from "next/image";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { FaChevronDown, FaShoppingCart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";


export default function Navbar() {
    return <div>

        {/* NAVBAR */}
        <nav className="flex w-full px-8 py-7 items-center">

        {/* Mobile view */}
        <div className="dark:text-white transition-transform duration-1000 z-20">
            <HamburgerMenu />          
        </div>

        {/* Logo */}
        <Link href={"/"} className="flex justify-center lg:w-fit w-full md:h-fit h-14">
            <Image src={"/local_logo.png"} alt={"logo"} height={25} width={100}/>
        </Link>

        {/* Desktop View */}
        <div className="hidden lg:flex w-full justify-end gap-5">
            {/* SEARCH BAR */}
            <div className="border w-7/12 rounded-full text-black dark:text-white px-5 py-2 flex items-center gap-4 hover:border-black dark:hover:border-white">
            <BiSearch size={24} className="text-gray-800"/>
            <input type="text" placeholder="Search for..." />
            </div>

            {/* BUTTONS */}
            <Link href={"#"} className="border px-5 py-2 rounded-full hover:bg-black hover:text-white border-black flex items-center gap-4">
            <IoPersonOutline size={24}/>
            <div>Account</div>
            </Link>
            <Link href={"#"} className="border px-5 py-2 rounded-full bg-gray-900 hover:bg-black text-white border-black flex items-center gap-4">
            <FiShoppingCart size={24}/>
            <div>$0.00 (0)</div>
            </Link>
        </div>

        {/* MOBILE APP ICON */}
        <Link href={"#"} className="w-fit md:hidden">
            <FaShoppingCart size={24}/>
        </Link>
        </nav>

        {/* Search Bar */}
        <div className="md:hidden border mx-6 rounded-full text-black dark:text-white px-3 py-2 flex items-center gap-4 hover:border-black dark:hover:border-white">
            <BiSearch size={24} className="text-gray-800"/>
            <input type="text" placeholder="Search for..." />
        </div>

        <div className="border-b mt-5"></div>

        <div className="flex items-center w-full px-8 shadow-xl">

            <div className="w-3/4 hidden md:flex items-center gap-9 transition-all duration-1000">
                <Link href={"#"} className="flex group gap-3 items-center transition-all relative z-10">
                    <h4 className="hover:underline">Categories</h4>
                    <FaChevronDown  className="relative transition-all group-hover:rotate-180"/>

                    {/* Dropdown */}
                    <div className="hidden group-hover:flex gap-28 absolute border top-10 -left-8 transition-all bg-white w-screen py-10">
                        <div className="flex flex-col px-8 gap-2">
                            <Link href={"#"} className="hover:underline font-semibold mb-3">Pantry</Link>
                            <Link href={"#"} className="hover:underline font-light">All</Link>
                            <Link href={"#"} className="hover:underline font-light">Pasta & Noodles</Link>
                            <Link href={"#"} className="hover:underline font-light">Grains & Beans</Link>
                            <Link href={"#"} className="hover:underline font-light">Snacks</Link>
                            <Link href={"#"} className="hover:underline font-light">Oil, Vineger & Spices</Link>
                            <Link href={"#"} className="hover:underline font-light">Sauces</Link>
                            <Link href={"#"} className="hover:underline font-light">Dressings</Link>
                        </div>
                        <div className="flex flex-col px-8 gap-2">
                            <div className="flex flex-col gap-2">
                                <Link href={"#"} className="hover:underline font-semibold mb-3">Produce</Link>
                                <Link href={"#"} className="hover:underline font-light">All</Link>
                                <Link href={"#"} className="hover:underline font-light">Vegetables</Link>
                                <Link href={"#"} className="hover:underline font-light">Meat</Link>
                                <Link href={"#"} className="hover:underline font-light">Herbs & Aromatics</Link>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Link href={"#"} className="hover:underline font-semibold mt-5 mb-3">Dairy & Eggs</Link>
                                <Link href={"#"} className="hover:underline font-light">All</Link>
                                <Link href={"#"} className="hover:underline font-light">Milk & Cream</Link>
                                <Link href={"#"} className="hover:underline font-light">Eggs & Butter</Link>
                                <Link href={"#"} className="hover:underline font-light">Cheese</Link>
                                <Link href={"#"} className="hover:underline font-light">Yogurt & Cultured Dairy</Link>
                                <Link href={"#"} className="hover:underline font-light">Plant-Based</Link>
                            </div>
                        </div>
                        <div className="flex flex-col px-8 gap-2">
                            <div className="flex flex-col gap-2">
                                <Link href={"#"} className="hover:underline font-semibold mb-3">Bakery</Link>
                                <Link href={"#"} className="hover:underline font-light">All</Link>
                                <Link href={"#"} className="hover:underline font-light">Breads</Link>
                                <Link href={"#"} className="hover:underline font-light">Buns & Rolls</Link>
                                <Link href={"#"} className="hover:underline font-light">Bagels & Breakfast</Link>
                                <Link href={"#"} className="hover:underline font-light">Gluten-Free</Link>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Link href={"#"} className="hover:underline font-semibold mt-5 mb-3">Drinks</Link>
                                <Link href={"#"} className="hover:underline font-light">All</Link>
                                <Link href={"#"} className="hover:underline font-light">Coffee</Link>
                                <Link href={"#"} className="hover:underline font-light">Tea & Exilirs</Link>
                                <Link href={"#"} className="hover:underline font-light">Juices</Link>
                            </div>
                        </div>
                        <div className="flex justify-center items-center border h-44 w-80 mr-9 relative rounded-2xl">
                            <div className="w-10/12 flex flex-col items-center mt-6 absolute z-30 ">
                                <h1 className="text-center text-xl font-medium">Fresh & Energetic</h1>
                                <h5 className="text-center text-sm mt-2">Healthy & Organic</h5>
                                <Link href={"#"} className="w-52 mt-3 text-center px-8 py-2 bg-black text-white hover:text-black hover:bg-white rounded-full font-semibold text-lg">Learn more</Link>
                            </div>
                            <img src="Categories-img.png" alt="Categories-img" className="absolute top-0 bg-transparent rounded-2xl" />
                        </div>
                    </div>
                </Link>
                <Link href={"#"} className="hover:underline">About us</Link>
                <Link href={"#"} className="hover:underline">Our stores</Link>
                <Link href={"#"} className="hover:underline">Recipes</Link>
                <Link href={"#"} className="hover:underline">Blog</Link>
                <Link href={"#"} className="hover:underline">FAQ</Link>
            </div>
            
            <div className='flex items-center justify-between w-full md:w-1/4'>
                {/* LEFT */}
                <div className='flex py-5 gap-3 items-center'>
                    <div>
                        <Image src={'/shop.png'} alt={'Home-icon'} height={30} width={30}/>
                    </div>
                    <div className='flex flex-col  justify-start'>
                        <div className='text-xs text-start'>Picking up?</div>
                        <div className='text-start md:text-sm text-xs font-medium flex items-center md:gap-3 gap-1 hover:underline'>Select store <FaChevronDown size={18} className="size-3"/></div>
                    </div>
                </div>
                {/* RIGHT */}
                <div className='flex py-5 gap-3 items-center'>
                    <div>
                        <Image src={'/box.png'} alt={'Delivery-Box'} height={30} width={30}/>
                    </div>
                    <div className='flex flex-col  justify-start'>
                        <div className='text-xs text-start'>Need delivery?</div>
                        <div className='text-start text-sm font-medium flex gap-3 hover:underline'>See estimates</div>
                    </div>
                </div>                    
            </div>

        </div>

        
        
    </div>
}