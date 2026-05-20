'use client'

import Button from "@/components/Custom/Button";
import { ArrowRight } from "lucide-react";

const gradientHero: string = 'bg-[#020617] bg-gradient-to-b from-transparent via-[#1E1B4B]/30 to-[#020617]'

function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Hero() {
    return (
        <section id="inicio" className={`relative flex flex-col justify-center items-start text-center gap-6 ${gradientHero} pt-40 pb-30 px-6 lg:px-12 w-full overflow-x-hidden`}>
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-100 h-100 bg-indigo-500/10 blur-[120px] rounded-full -z-10" />

            <div className="flex flex-col justify-center items-center w-full md:items-center lg:items-start">
                <div className="flex items-center justify-center lg:justify-start flex-wrap gap-1.5 w-fit max-w-full px-3 py-1 rounded-full border border-white/20 bg-white/10 mb-5">
                    <span className="w-2 h-2 rounded-full bg-[#45d9f5]" />
                    <span className="text-label-micro font-medium text-white/70 wrap-break-word text-center lg:text-left">
                        Product Engineer · Aberto a oportunidades
                    </span>
                </div>
                <h1 className="flex flex-col items-center text-h1 w-full font-extrabold mb-4 text-white lg:items-start lg:w-[70%]">
                    <span
                        className="bg-clip-text text-transparent text-h1 text-center lg:text-start w-fit"
                        style={{ backgroundImage: 'linear-gradient(90deg, #c47de8, #7b8ff0, #45d9f5)' }}
                    >
                        O designer que também implementa — <span className="text-white/90 ml-1 text-center lg:text-start"> O dev que também pensa em UX.
                        </span>
                    </span>

                </h1>
                <p className="text-body-default text-white/65 mb-7 text-center lg:text-start lg:w-[50%]">
                    Transformo problemas de produto em experiências digitais, unindo design e desenvolvimento em cada etapa do processo.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full">

                    <Button
                        variant='cta'
                        className="flex justify-center items-center py-4 px-6 rounded-xl w-full [@media(min-width:426px)_and_(max-width:639px)]:w-71 sm:w-71"
                        onClick={() => scrollToSection('projetos')}
                    >
                        Ver projetos
                    </Button>


                    <div className="w-full [@media(min-width:426px)_and_(max-width:639px)]:w-71 sm:w-71">
                        <Button
                            type="submit"
                            variant="surface"
                            className="group flex justify-center items-center gap-1 py-4 px-6 rounded-xl w-full sm:w-71"
                            onClick={() => scrollToSection('comoTrabalho')}
                        >
                            Saiba mais
                            <ArrowRight size={24} className="text-current transition-transform duration-200 ease-in-out group-hover:translate-x-0.5"/>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}