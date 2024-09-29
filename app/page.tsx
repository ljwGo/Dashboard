import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from './ui/practice/home.module.css';
import { lusitana } from './ui/font';
import Image from 'next/image';

export default function Page() {
  return (
    <>
        {/* <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black">Hello Next</div>
        <div className={styles.home}>Hello Next</div>
        <div className={`${lusitana.className} text-2xl`}>Hello Next</div> */}
        
        <Image src="/hero-desktop.png" alt="hero" width={1000} height={760} className="hidden md:block" />
        <Image src="/hero-mobile.png" alt="hero" width={375} height={812} className="block md:hidden" />
    </>
  );
}
