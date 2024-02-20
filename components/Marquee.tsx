import React from 'react';
import Marquee from 'react-fast-marquee';
import Link from 'next/link';

interface Props {
  content: string;
  speed?: number; // Optional speed in pixels per second
}

const MyMarquee: React.FC<Props> = ({ content, speed }) => {
  return (
    <Marquee gradient={false} speed={speed || 100} className=' w-full text-xl py-8'>
        <div className="flex gap-24">
            <h5>We have opened a new store in <b>La Defense.</b> <Link href={"#"} className='underline'>Check it out!</Link></h5>
            <h5>Check out or all new <b className='underline'>RECIPES SECTION</b></h5>
            <h5><b className='underline italic'>FREE SHIPPING</b> on orders above $50.</h5>
        </div>
    </Marquee>
  );
};

export default MyMarquee;
