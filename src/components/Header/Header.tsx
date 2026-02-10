'use client'

import MenuMobile from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

import Image from "next/image";
import Link from "next/link";

export default function Header(){
    return (
        <header className="flex justify-between items-center bg-[#EDF3FF] w-full h-auto px-10 py-6">
            <Link href={'/'}>
                <Image
                    src={'/logo.svg'}
                    alt="gabriel miranda"
                    width={120}
                    height={120}
                />
            </Link>

            {/* Desktop Menu - visível em md+ */}
            <div className="hidden md:block">
                <DesktopMenu />
            </div>

            {/* Mobile Menu - visível em sm */}
            <div className="md:hidden">
                <MenuMobile />
            </div>
        </header>
    )
}