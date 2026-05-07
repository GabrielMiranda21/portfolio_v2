'use client'

import Button from "@/components/UI/Button";
import Photo from "./Photo";
import { mdiTrayArrowDown } from "@mdi/js";
import Icon from "@mdi/react";

// para gradientes a gente usa "to-" quando querermos apenas 2 cores mas caso quisermos algo diferente adicionamos "via-"
const gradientHero: string = 'bg-[#020617] bg-gradient-to-b from-transparent via-[#1E1B4B]/30 to-[#020617]'

function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Hero() {
    return (
        <section id="inicio" className={`relative flex flex-col justify-center items-start text-center gap-6 ${gradientHero} py-60 px-6 lg:px-12 w-full overflow-x-hidden`}>
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-100 h-100 bg-indigo-500/10 blur-[120px] rounded-full -z-10" />

            <div className="flex flex-col justify-center items-center w-full lg:items-start">
                <div className="flex items-center justify-center lg:justify-start flex-wrap gap-1.5 w-fit max-w-full px-3 py-1 rounded-full border border-white/20 bg-white/10 mb-5">
                    <span className="w-2 h-2 rounded-full bg-[#45d9f5]" />
                    <span className="text-label-micro font-medium text-white/70 wrap-break-word text-center lg:text-left">
                        Designer Engineer · Aberto a oportunidades
                    </span>
                </div>
                <h1 className="flex flex-col items-center text-h1 font-extrabold mb-4 text-white lg:items-start lg:w-[70%]">
                    <span
                        className="bg-clip-text text-transparent text-h1 text-center lg:text-start"
                        style={{ backgroundImage: 'linear-gradient(90deg, #c47de8, #7b8ff0, #45d9f5)' }}
                    >
                        O designer que também implementa.

                        <span className="text-white ml-1 text-center lg:text-start">
                            O dev que também pensa em UX.
                        </span>
                    </span>

                </h1>
                <p className="text-body-default text-white/65 mb-7 text-center lg:text-start lg:w-[50%]">
                    Transformo problemas de produto em experiências digitais, unindo design e desenvolvimento em cada etapa do processo.
                </p>
                <div className="flex flex-col justify-center items-center gap-6 w-full md:flex-row lg:flex-row lg:justify-start">
                    <Button
                        variant='cta'
                        className="w-full text-white py-4 px-6 whitespace-normal max-w-71 rounded-xl"
                        style={{ background: 'linear-gradient(90deg, #8E24AA, #3949AB)' }}
                        onClick={() => scrollToSection('projetos')}
                    >
                        Ver projetos
                    </Button>
                    <Button variant="primary" className="w-full flex justify-center items-center gap-2 text-white py-4 px-6 whitespace-normal max-w-71 rounded-xl">
                        <Icon path={mdiTrayArrowDown} size={1} />
                        Curriculo
                    </Button>
                </div>
            </div>
        </section>
    )
}