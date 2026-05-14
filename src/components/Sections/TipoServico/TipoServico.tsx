'use client'

import { useState } from 'react'

const cards = [
  {
    number: '01',
    title: 'Product Designer',
    subtitle: 'UX/UI focado em produtos digitais',
    accent: 'from-[#8E24AA] to-[#c47de8]',
    dot: '#c47de8',
    bg: '#12003a',
    border: 'border-r border-white/[0.08]',
    services: [
      'Design de landing page',
      'Dashboard e painel admin',
      'Fluxo e experiência do produto',
      'Design System',
      'Protótipos no Figma',
    ],
    roll: 'Projeto experiências digitais',
    art: (
      <svg viewBox="0 0 120 120" fill="none" className="w-28 h-28">
        <rect x="20" y="20" width="80" height="60" rx="6" stroke="white" strokeWidth="2" />
        <rect x="20" y="20" width="80" height="14" rx="6" fill="white" fillOpacity="0.3" />
        <circle cx="30" cy="27" r="3" fill="white" />
        <circle cx="42" cy="27" r="3" fill="white" />
        <circle cx="54" cy="27" r="3" fill="white" />
        <rect x="30" y="44" width="40" height="4" rx="2" fill="white" fillOpacity="0.4" />
        <rect x="30" y="54" width="30" height="3" rx="1.5" fill="white" fillOpacity="0.25" />
        <rect x="30" y="62" width="35" height="3" rx="1.5" fill="white" fillOpacity="0.25" />
        <rect x="30" y="92" width="60" height="8" rx="4" fill="white" fillOpacity="0.2" />
        <line x1="20" y1="85" x2="100" y2="85" stroke="white" strokeWidth="1" strokeOpacity="0.2" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Front-end Developer',
    subtitle: 'Interfaces performáticas para web',
    accent: 'from-[#3949AB] to-[#7b8ff0]',
    dot: '#7b8ff0',
    bg: '#0d1a5c',
    border: 'border-r border-white/[0.08]',
    services: [
      'Landing page responsiva',
      'Portfólio profissional',
      'E-commerce front-end',
      'Blog e sites institucionais',
      'PWA e interfaces web',
    ],
    roll: 'Construo interfaces funcionais',
    art: (
      <svg viewBox="0 0 120 120" fill="none" className="w-28 h-28">
        <rect x="15" y="25" width="90" height="70" rx="6" stroke="white" strokeWidth="2" />
        <path d="M38 55 L28 65 L38 75" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M52 50 L68 80" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity={0.5} />
        <path d="M82 55 L92 65 L82 75" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="15" y="25" width="90" height="12" rx="6" fill="white" fillOpacity="0.15" />
        <circle cx="26" cy="31" r="2.5" fill="white" fillOpacity="0.6" />
        <circle cx="35" cy="31" r="2.5" fill="white" fillOpacity="0.6" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Product Engineer',
    subtitle: 'Design e desenvolvimento integrados',
    accent: 'from-[#00ACC1] to-[#45d9f5]',
    dot: '#45d9f5',
    bg: '#003848',
    border: '',
    services: [
      'MVP do conceito ao código',
      'Produto ponta a ponta',
      'Redesign com implementação',
      'Design System em código',
      'UX alinhada ao desenvolvimento',
    ],
    roll: 'Uno design e desenvolvimento',
    art: (
      <svg viewBox="0 0 120 120" fill="none" className="w-28 h-28">
        <circle cx="60" cy="52" r="28" stroke="white" strokeWidth="2" />
        <path d="M46 52 C46 44 52 38 60 38 C68 38 74 44 74 52" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <circle cx="60" cy="52" r="8" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="1.5" />
        <line x1="60" y1="24" x2="60" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="60" y1="80" x2="60" y2="86" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="32" y1="52" x2="26" y2="52" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="88" y1="52" x2="94" y2="52" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <rect x="44" y="88" width="32" height="10" rx="5" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="1" />
      </svg>
    ),
  },
]

export default function TipoServico() {
  const [active, setActive] = useState<string | null>(null)

  return (

    <section className='flex flex-col gap-6 px-6 lg:px-12 py-30 bg-[#EDF3FF]'>
      <h2 className='text-h2 font-extrabold text-[#1B263B]'>Tipos de serviços</h2>

      <div className='flex flex-col gap-3'>
        <ul className="flex flex-col w-full h-150 md:h-105 lg:h-95 overflow-hidden md:flex-row lg:flex-row p-0 m-0 list-none pointer-events-none rounded-xl">
          {cards.map((card) => (
            <li
              key={card.number}
              style={{ backgroundColor: card.bg }}
              className={`
                relative flex flex-col justify-end px-6 pb-7 overflow-hidden box-border
                transition-[flex] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] pointer-events-auto 
                ${card.border}
                ${active === null
                  ? 'flex-1'
                  : active === card.number
                    ? 'flex-[2]'
                    : 'flex-[0.6]'
                }
              `}
              onMouseEnter={() => setActive(card.number)}
              onMouseLeave={() => setActive(null)}
            >
              {/* Art */}
              <div
                className={`
                  absolute top-0 left-0 right-0 h-[55%] flex items-center justify-center
                  transition-opacity duration-400 pointer-events-none
                  ${active === card.number ? 'opacity-35' : 'opacity-[0.18]'}
                `}
              >
                {card.art}
              </div>


              <div className="relative z-10 flex flex-col gap-3 md:gap-2">
                <div>
                  <p className="text-[10px] font-medium tracking-[0.1em] uppercase text-white/45 mb-1.5 pointer-events-none">
                    {card.number}
                  </p>


                  <div
                    className={`
                      h-0.5 rounded-full bg-gradient-to-r mb-2.5
                      transition-[width] duration-400 pointer-events-none
                      ${card.accent}
                      ${active === card.number ? 'w-12' : 'w-7'}
                    `}
                  />

                  <div className="flex flex-col gap-1">
                    <h3 className="text-h5 font-medium text-white leading-tight pointer-events-none">
                      {card.title}
                    </h3>
                    <strong className="text-label-overline font-light text-white leading-tight pointer-events-none">
                      {card.subtitle}
                    </strong>
                  </div>
                </div>

                <div className={`
                      flex flex-col gap-2 justify-start overflow-hidden pointer-events-none lg:items-end
                      transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] lg:flex-row lg:justify-between
                      ${active === card.number
                    ? 'max-h-48 opacity-100'
                    : 'max-h-0 opacity-0'
                  }
                  `}>
                  <ul
                    className={` 
                      flex flex-col gap-1.5
                    `}
                  >
                    {card.services.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-body-default text-white/65 whitespace-nowrap font-normal pointer-events-none">
                        <span
                          className="w-1 h-1 rounded-full flex-shrink-0"
                          style={{ background: card.dot }}
                        />
                        {s}
                      </li>
                    ))}
                  </ul>

                  <div className={`
                      flex items-center text-body-small text-white/65 font-medium pointer-events-none 
                      border border-white/65 p-2 w-fit h-fit rounded-xl bg-white/10 flex-wrap
                    `}>
                    {card.roll}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className='flex items-center justify-center w-full'>
          <p className='text-label-overline text-[#1B263B] font-light'>
            Cada projeto é único. O investimento varia conforme escopo, complexidade e prazo.
          </p>
        </div>

      </div>

    </section>
  )
}