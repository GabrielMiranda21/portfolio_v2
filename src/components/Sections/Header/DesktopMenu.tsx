'use client'

import { Menu } from "@/constants/Menu";

function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function DesktopMenu() {
    return (
        <nav className="flex items-center gap-6">
            <ul className="flex gap-6 list-none">
                {Menu.map((item) => (
                    <li key={item.id} className="text-body-default font-medium text-[#1B263B]/80 hover:text-[#1B263B]">
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
