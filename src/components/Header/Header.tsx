'use client'

import MenuMobile from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

import Image from "next/image";
import Link from "next/link";

export default function Header(){
    return (
        <header className="fixed top-0 z-50 flex justify-between items-center bg-[#EDF3FF]/70 backdrop-blur-md w-full h-auto px-6 lg:px-12 py-6 border-b border-white/10">
            <Link href={'/'}>
                <Image
                    src={'/logo_gabriel_ideal.svg'}
                    alt="gabriel miranda"
                    width={40}
                    height={74}
                />
            </Link>

            {/* Desktop Menu - visível em md+ */}
            <div className="hidden min-[850px]:block">
                <DesktopMenu />
            </div>

            {/* Mobile Menu - visível em sm */}
            <div className="min-[850px]:hidden">
                <MenuMobile />
            </div>
        </header>
    )
}