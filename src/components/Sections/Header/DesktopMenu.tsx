'use client'

import { Menu } from "@/constants/Menu";

function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function DesktopMenu() {
    return (
        <nav>
            <ul className="list-none flex gap-6 text-[#1B263B]">
                {Menu.map((item) => (
                    <li key={item.id} className="text-body-default font-medium hover:drop-shadow-[0_1px_1px_rgba(27,38,59,0.30)]">
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
