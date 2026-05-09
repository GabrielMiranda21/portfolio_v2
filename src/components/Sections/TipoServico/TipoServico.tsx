'use client'

import { useState } from 'react'

const cards = [
  {
    number: '01',
    title: 'Designer',
    accent: 'from-[#8E24AA] to-[#c47de8]',
    dot: '#c47de8',
    bg: '#12003a',
    border: 'border-r border-white/[0.08]',
    services: [
      'Landing page',
      'Dashboard / painel admin',
      'Design System',
      'Fluxo de produto (UX + UI)',
      'Prototipagem no Figma',
    ],
    art: (
      <svg viewBox="0 0 120 120" fill="none" className="w-28 h-28">
        <rect x="20" y="20" width="80" height="60" rx="6" stroke="white" strokeWidth="2"/>
        <rect x="20" y="20" width="80" height="14" rx="6" fill="white" fillOpacity="0.3"/>
        <circle cx="30" cy="27" r="3" fill="white"/>
        <circle cx="42" cy="27" r="3" fill="white"/>
        <circle cx="54" cy="27" r="3" fill="white"/>
        <rect x="30" y="44" width="40" height="4" rx="2" fill="white" fillOpacity="0.4"/>
        <rect x="30" y="54" width="30" height="3" rx="1.5" fill="white" fillOpacity="0.25"/>
        <rect x="30" y="62" width="35" height="3" rx="1.5" fill="white" fillOpacity="0.25"/>
        <rect x="30" y="92" width="60" height="8" rx="4" fill="white" fillOpacity="0.2"/>
        <line x1="20" y1="85" x2="100" y2="85" stroke="white" strokeWidth="1" strokeOpacity="0.2"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Front-end',
    accent: 'from-[#3949AB] to-[#7b8ff0]',
    dot: '#7b8ff0',
    bg: '#0d1a5c',
    border: 'border-r border-white/[0.08]',
    services: [
      'Landing page institucional',
      'Site de portfólio',
      'E-commerce (vitrine + carrinho)',
      'Blog / site de conteúdo',
      'PWA',
    ],
    art: (
      <svg viewBox="0 0 120 120" fill="none" className="w-28 h-28">
        <rect x="15" y="25" width="90" height="70" rx="6" stroke="white" strokeWidth="2"/>
        <path d="M38 55 L28 65 L38 75" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M52 50 L68 80" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity={0.5}/>
        <path d="M82 55 L92 65 L82 75" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="15" y="25" width="90" height="12" rx="6" fill="white" fillOpacity="0.15"/>
        <circle cx="26" cy="31" r="2.5" fill="white" fillOpacity="0.6"/>
        <circle cx="35" cy="31" r="2.5" fill="white" fillOpacity="0.6"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Design Engineer',
    accent: 'from-[#00ACC1] to-[#45d9f5]',
    dot: '#45d9f5',
    bg: '#003848',
    border: '',
    services: [
      'MVP do wireframe ao código',
      'Redesign com implementação',
      'Design system com código',
      'Produto completo sem retrabalho',
    ],
    art: (
      <svg viewBox="0 0 120 120" fill="none" className="w-28 h-28">
        <circle cx="60" cy="52" r="28" stroke="white" strokeWidth="2"/>
        <path d="M46 52 C46 44 52 38 60 38 C68 38 74 44 74 52" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="60" cy="52" r="8" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="1.5"/>
        <line x1="60" y1="24" x2="60" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <line x1="60" y1="80" x2="60" y2="86" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <line x1="32" y1="52" x2="26" y2="52" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <line x1="88" y1="52" x2="94" y2="52" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <rect x="44" y="88" width="32" height="10" rx="5" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="1"/>
      </svg>
    ),
  },
]

export default function TipoServico() {
  const [active, setActive] = useState<string | null>(null)

  return (

    <section className='flex flex-col gap-6 px-6 lg:px-12 py-30 bg-[#EDF3FF]'>
      <h2 className='text-h2 font-extrabold text-[#1B263B]'>Tipos de serviços</h2>

      <div className="flex flex-col w-full h-150 md:h-95 lg:h-95 overflow-hidden md:flex-row lg:flex-row">
        {cards.map((card) => (
          <div
            key={card.number}
            style={{ backgroundColor: card.bg }}
            className={`
              relative flex flex-col justify-end px-6 pb-7 overflow-hidden
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
                transition-opacity duration-400
                ${active === card.number ? 'opacity-35' : 'opacity-[0.18]'}
              `}
            >
              {card.art}
            </div>

            {/* Content */}
            <div className="relative z-10">
              <p className="text-[10px] font-medium tracking-[0.1em] uppercase text-white/45 mb-1.5">
                {card.number}
              </p>

              {/* Accent line */}
              <div
                className={`
                  h-0.5 rounded-full bg-gradient-to-r mb-2.5
                  transition-[width] duration-400
                  ${card.accent}
                  ${active === card.number ? 'w-12' : 'w-7'}
                `}
              />

              <h3 className="text-h5 font-medium text-white mb-3 leading-tight">
                {card.title}
              </h3>

              {/* Services list */}
              <ul
                className={`
                  flex flex-col gap-1.5 overflow-hidden
                  transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                  ${active === card.number
                    ? 'max-h-48 opacity-100'
                    : 'max-h-0 opacity-0'
                  }
                `}
              >
                {card.services.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-body-default text-white/65 whitespace-nowrap font-normal">
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: card.dot }}
                    />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}