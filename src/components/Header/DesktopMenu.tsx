'use client'

import { Menu } from "@/constants/Menu";

function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function DesktopMenu() {
    return (
        <nav className="font-poppins">
            <ul className="list-none flex gap-9 text-[#1B263B]">
                {Menu.map((item) => (
                    <li key={item.id} className="text-body-default font-medium min-[850px]:text-body-default hover:font-semibold">
                        <a
                            href={`#${item.id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(item.id);
                            }}
                        >
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
