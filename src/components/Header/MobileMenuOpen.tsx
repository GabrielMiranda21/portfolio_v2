'use client'

import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";
import { Menu } from "@/constants/Menu";

interface MobileMenuOpenProps {
    onClose: () => void;
}

function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function MobileMenuOpen({ onClose }: MobileMenuOpenProps){
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
            <nav className="fixed top-0 right-0 h-screen w-full bg-[#EDF3FF] shadow-lg z-50 p-6">
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2"
                    aria-label="Fechar menu"
                >
                    <Icon
                        path={mdiClose}
                        size={1.5}
                        color='#1B263B'
                    />
                </button>

                <ul className="list-none flex flex-col gap-6 mt-12 text-center text-body-default text-[#1B263B]">
                    {Menu.map((item) => (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.id);
                                    onClose();
                                }}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}