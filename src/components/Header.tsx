'use client'

import { useState } from "react";
import { useEffect } from "react";

import { Icon } from "@mdi/react"
import { mdiMenu } from "@mdi/js"

import { Menu } from "@/constants/Menu";
import MenuMobile from "./MobileMenu";

import Image from "next/image";
import Link from "next/link";

const screenCaseHeader = {
        large: 'lg:flex lg:justify-between lg:items-center lg:bg-[#EDF3FF] lg:w-full lg:h-auto lg:px-12 lg:py-6',
        middle: 'md:flex md:justify-between md:items-center md:bg-[#EDF3FF] md:w-full md:h-auto md:px-12 md:py-6'
    }



export default function Header(){
    //const { menu, setMenu } = useState(false);

    useEffect(() => {
        return 
    })

    return (
        <header className={`${screenCaseHeader.middle} ${screenCaseHeader.large}`}>
            <Link href={'/'}>
                <Image
                    src={'/logo.svg'}
                    alt="gabriel miranda"
                    width={120}
                    height={120}
                />
            </Link>

            <nav className="font-poppins">
                <ul className="list-none flex gap-9 text-[#1B263B] font-normal">
                    {Menu.map((item) => {
                        return (
                            <li className="hover:font-medium">
                                <Link key={item.id} href={`#${item.id}`}>
                                    {item.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}