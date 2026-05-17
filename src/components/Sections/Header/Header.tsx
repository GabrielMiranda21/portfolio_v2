'use client'

import MenuMobile from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 z-50 flex justify-between items-center bg-white w-full h-auto px-6 lg:px-12 py-4 border-b border-black/5">
            <Link href={'/'} className="flex gap-2 items-center">
                {/*<Image
                    src={'/logo_gabriel_identy.svg'}
                    alt="gabriel miranda"
                    width={40}
                    height={74}
                    className="h-auto"
                    priority
                />*/}

                <Image
                    src={'/logo.svg'}
                    alt="gabriel miranda"
                    width={40}
                    height={74}
                    className="h-auto"
                    priority
                />
                
                <span className="text-lg font-extrabold bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)]"
                    style={{
                        backgroundImage: 'linear-gradient(90deg, #c47de8, #7b8ff0, #45d9f5)',
                    }}>
                    {'<Gabriel Miranda/>'}
                </span>
            </Link>

            {/* Desktop Menu - visível em md+ */}
            <div className="hidden min-[900px]:block">
                <DesktopMenu />
            </div>

            {/* Mobile Menu - visível em sm */}
            <div className="min-[900px]:hidden">
                <MenuMobile />
            </div>
        </header>
    )
}