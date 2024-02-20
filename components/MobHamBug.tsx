"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaAngleRight, FaChevronDown } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa6';
import { IoMdMenu } from 'react-icons/io';
import { IoClose, IoPersonOutline } from 'react-icons/io5';
import { LuMailOpen } from 'react-icons/lu';
const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <button className="md:hidden" onClick={toggleMenu}>
        {isOpen ? (
          <div>
            <div className='absolute top-1 left-0 right-0 border border-gray-500 w-full bg-white'>
                <div className='flex px-6 py-5 items-center justify-between border-b-2'>
                    <h3 className='text-2xl font-sans'>Menu</h3>
                    <IoClose size={32} />
                </div>
                <div className='flex items-center justify-between w-full px-6 border-b-2'>
                    {/* LEFT */}
                    <div className='flex py-5 gap-3 items-center'>
                        <div>
                            <Image src={'/shop.png'} alt={'Home-icon'} height={30} width={30}/>
                        </div>
                        <div className='flex flex-col  justify-start'>
                            <div className='text-xs text-start'>Picking up?</div>
                            <div className='text-start text-sm font-medium flex gap-3'>Select store <FaChevronDown size={18}/></div>
                        </div>
                    </div>
                    {/* RIGHT */}
                    <div className='flex py-5 gap-3 items-center'>
                        <div>
                            <Image src={'/box.png'} alt={'Delivery-Box'} height={30} width={30}/>
                        </div>
                        <div className='flex flex-col  justify-start'>
                            <div className='text-xs text-start'>Need delivery?</div>
                            <div className='text-start text-sm font-medium flex gap-3'>See estimates</div>
                        </div>
                    </div>                    
                </div>
                <div className='w-full flex justify-start flex-col border-b-2'>
                    <Link href={"#"} className='text-start px-6 py-3 border-b-2 font-light flex w-full justify-between'>
                        <h1>Categories</h1><FaAngleRight size={24}/>
                    </Link>
                    <Link href={"#"} className='font-light text-start px-6 py-3 border-b-2'>
                        Our stores
                    </Link>
                    <Link href={"#"} className='font-light text-start px-6 py-3 border-b-2'>
                        Recipes
                    </Link>
                    <Link href={"#"} className='font-light text-start px-6 py-3 border-b-2'>
                        Blog
                    </Link>
                    <Link href={"#"} className='font-light text-start px-6 py-3 border-b-2'>
                        FAQ
                    </Link>
                    <Link href={"#"} className='flex gap-3 items-center font-light text-start px-6 py-3'>
                        <IoPersonOutline size={24}/>
                        Account
                    </Link>
                </div>
                <div className='px-6 py-5 flex justify-between items-center'>
                    <div className='flex items-center gap-3'>
                        <Link href={"#"}><LuMailOpen size={24}/></Link>
                        <Link href={"#"}><FaFacebookF size={24}/></Link>
                        <Link href={"#"}><BsTwitterX size={24}/></Link>
                    </div>
                    <div className='flex items-center gap-3'>
                        <h2>English</h2>
                        <FaChevronDown size={18}/>
                    </div>
                </div>                
            </div>
        </div>
        ) : (
          <div>
            <IoMdMenu size={32}/>
          </div>
        )}
      </button>
    );
  };
  
  export default HamburgerMenu;
  