'use client'

import { useState } from "react";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";

import MobileMenuOpen from './MobileMenuOpen';

export default function MobileMenu(){
    const [isOpen, setIsOpen] = useState(false);

    function handleToggleMenu(){
        setIsOpen(prev => !prev);
    }

    function handleCloseMenu(){
        setIsOpen(false);
    }

    return (
        <>
            <button
                onClick={handleToggleMenu}
                aria-expanded={isOpen}
                className="p-2"
            >
                <Icon
                    path={mdiMenu}
                    size={1.5}
                    color='#1B263B'
                />
            </button>

            {isOpen && (
                <MobileMenuOpen onClose={handleCloseMenu} />
            )}
        </>
    )
}