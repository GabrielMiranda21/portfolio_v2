'use client'

import { useState } from "react";
import MenuMobile from "./MobileMenu";
import Image from "next/image";
import Link from "next/link";


import { mdiMenu } from "@mdi/js"

export default function Header(){
    //const { menu, setMenu } = useState(false);

    return (
        <header className="flex justify-between items-center bg-[#EDF3FF] w-full h-auto px-6 py-6">
            <Link href={'/'}>
                <Image
                    src={'/logo.svg'}
                    alt="gabriel miranda"
                    width={100}
                    height={100}
                />
            </Link>

            <nav></nav>
        </header>
    )
}