'use client'

import Link from "next/link"
import Icon from "@mdi/react"
import { Menu } from "@/constants/Menu";

import { mdiClose } from '@mdi/js'

export default function MenuMobile(){
    return (
        <nav className="fixed inset-0 z-50 w-screen h-screen bg-[#EDF3FF] flex flex-col items-center 
                        font-poppins">
            <span className="flex justify-end w-full p-6">
                <Icon
                    path={mdiClose}
                    size={2}
                    color='#1B263B'
                />
            </span>
            <ul className="flex flex-col gap-6 text-lg font-normal text-[#1B263B] text-center py-2">
                {Menu.map((item) => {
                    return (
                        <li key={item.id}>
                            <Link href={`#${item.id}`}>
                                {item.name}
                            </Link>                      
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}