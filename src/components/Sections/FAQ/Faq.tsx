'use client'

import { useState } from 'react'

type Tab = 'clientes' | 'recrutadores'

const clientesFaq = [
  {
    question: 'Quanto custa um projeto?',
    answer: 'O valor varia conforme o escopo — tipo de projeto, prazo e complexidade. Trabalho com orçamento personalizado após entender sua necessidade. Entre em contato para conversarmos sem compromisso.',
    highlight: 'orçamento personalizado',
  },
  {
    question: 'Qual é o prazo médio de entrega?',
    answer: 'Depende do projeto. Uma landing page simples pode ficar pronta em 1–2 semanas. Projetos maiores como e-commerce ou MVP completo podem levar de 3 a 6 semanas. Definimos o prazo juntos antes de começar.',
    highlight: null,
  },
  {
    question: 'Como funciona o processo de trabalho?',
    answer: 'Começo entendendo o problema e o objetivo do projeto. Depois passo pelo design no Figma para validarmos antes de codar, e só então parto para o desenvolvimento. Você acompanha cada etapa e pode dar feedback ao longo do processo.',
    highlight: null,
  },
  {
    question: 'Preciso ter ideia do que quero para contratar?',
    answer: 'Não precisa. Se você tem um problema ou objetivo, já é suficiente para começarmos. Ajudo a estruturar a solução desde o início — inclusive a decidir o que faz ou não faz sentido construir.',
    highlight: null,
  },
  {
    question: 'Você faz manutenção após a entrega?',
    answer: 'Sim. Ofereço suporte pós-entrega para correções e ajustes. Para evoluções maiores ou manutenção contínua, podemos combinar um modelo de suporte recorrente.',
    highlight: null,
  },
]

const recrutadoresFaq = [
  {
    question: 'Você está disponível para novas oportunidades?',
    answer: 'Sim, estou aberto a oportunidades como Product Designer, Desenvolvedor Front-end ou posições híbridas que envolvam as duas áreas. Costumo responder em até 1 dia útil.',
    highlight: null,
  },
  {
    question: 'Você trabalha remoto, presencial ou híbrido?',
    answer: 'Tenho preferência por remoto ou híbrido, mas estou aberto a discutir outras modalidades dependendo da oportunidade. Estou localizado em Santo André, SP.',
    highlight: null,
  },
  {
    question: 'Qual é a sua stack principal?',
    answer: 'No front-end trabalho principalmente com React, Next.js, TypeScript e Tailwind CSS. No design uso Figma para todo o processo — desde wireframes até protótipos de alta fidelidade.',
    badges: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    question: 'Você tem experiência com trabalho em equipe?',
    answer: 'Sim. Durante minha formação trabalhei em projetos colaborativos utilizando Git, GitHub e metodologias ágeis. Tenho facilidade em comunicar decisões de design para devs e vice-versa.',
    highlight: null,
  },
  {
    question: 'Você aceita trabalhar como júnior?',
    answer: 'Sim, estou no início da carreira e busco exatamente isso — uma primeira oportunidade onde eu possa crescer, colaborar e contribuir com produtos reais.',
    highlight: null,
  },
]

function FaqItem({ question, answer, badges }: {
  question: string
  answer: string
  badges?: string[]
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`border-b border-black/[0.06] last:border-none bg-white`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-5 text-left gap-4 hover:bg-gray-50 transition-colors"
      >
        <span className="text-body-default font-medium text-[#1a1a2e] flex-1">{question}</span>
        <span
          className={`
            w-6 h-6 rounded-full border border-black/10 flex items-center justify-center
            text-base text-[#c47de8] flex-shrink-0
            transition-transform duration-300
            ${open ? 'rotate-45 bg-[#f3e5f5]' : ''}
          `}
        >
          +
        </span>
      </button>

      <div
        className={`
          overflow-hidden transition-all duration-350 ease-in-out px-6
          ${open ? 'max-h-48 pb-5' : 'max-h-0'}
        `}
      >
        <p className="text-body-default text-[#5E6472]">{answer}</p>
        {badges && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {badges.map(b => (
              <span
                key={b}
                className="text-body-default px-2.5 py-0.5 rounded-full font-medium"
                style={{ background: '#f3e5f5', color: '#8E24AA' }}
              >
                {b}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function FAQ() {
  const [activeTab, setActiveTab] = useState<Tab>('recrutadores')

  const tabs: { key: Tab; label: string }[] = [
    { key: 'recrutadores', label: 'Para recrutadores' },
    { key: 'clientes', label: 'Para clientes' },
  ]

  const faq = activeTab === 'clientes' ? clientesFaq : recrutadoresFaq

  return (
    <section id='faq' className="flex flex-col gap-6 items-center px-6 lg:px-12 py-30">
      <div className="flex flex-col gap-3 justify-center items-center">
        <h2 className="text-h2 font-black text-[#1a1a2e] text-center">
          Dúvidas frequentes
        </h2>
        <p className="text-body-default font-normal text-[#5E6472] text-center">
          Selecione o seu perfil para ver as respostas mais relevantes.
        </p>
      </div>

      <div className='
        flex flex-col gap-6 items-center py-2 w-full
      '>
        <div className="
          flex flex-col w-full gap-2 md:flex-row md:justify-center lg:flex-row lg:justify-center
          [@media(min-width:425px)_and_(max-width:769px)]:flex-row [@media(min-width:425px)_and_(max-width:769px)]:justify-center
        ">
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`
                px-5 py-1.5 rounded-full text-body-default font-medium border transition-all duration-200 w-full
                [@media(min-width:425px)_and_(max-width:769px)]:w-40 md:w-50 lg:w-50 shadow-xs
                ${activeTab === tab.key ? 'text-white border-transparent' : 'bg-white text-[#5E6472] border-black/10 hover:border-black/20'}
              `}
              style={activeTab === tab.key
                ? { background: 'linear-gradient(90deg, #4361EE, #7b8ff0)' }
                : {}
              } 
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Lista */}
        <div className="border border-black/[0.06] rounded-2xl overflow-hidden">
          {faq.map((item) => (
            <FaqItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              badges={'badges' in item ? item.badges : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  )
}