import { Fragment } from "react";

const services = [
    'UI/UX Design',
    'Product Design',
    'Front-end',
    'Prototipagem',
    'Design System',
    'Product Engineer',
    'Figma',
    'React',
    'Acessibilidade',
    'Responsivo'
]

const metrics = [
    { num: '2',    label: 'projetos entregues' },
    { num: '2',    label: 'anos estudando' },
    { num: '100%', label: 'do design ao código' },
    { num: '2',    label: 'formações na área' },
    { num: '2',    label: 'clientes atendidos' },
    { num: '1',    label: 'ano com Figma' },
    { num: '∞',    label: 'vontade de aprender' }, // toque de personalidade
  ]

export default function Stack() {
    return (
        <section className="py-6 overflow-hidden">
            <div className="relative overflow-hidden
                before:absolute before:left-0 before:top-0 before:bottom-0 before:w-16 before:z-10 before:pointer-events-none
                before:bg-gradient-to-r before:from-white before:to-transparent
                after:absolute after:right-0 after:top-0 after:bottom-0 after:w-16 after:z-10 after:pointer-events-none
                after:bg-gradient-to-l after:from-white after:to-transparent
                mb-2.5
            ">
                <div className="flex w-max shrink-0 animate-marquee-stack-forward gap-3 lg:gap-6">
                    {[...services, ...services].map((item, i) => (
                        <span
                            key={i}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 bg-gray-50 text-sm font-medium text-gray-800 whitespace-nowrap"
                        >
                            <span
                                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ background: 'linear-gradient(135deg, #8E24AA, #00ACC1)' }}
                            />
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            {/* Linha 2 — Métricas (direita para esquerda) */}
            <div className="relative overflow-hidden
                before:absolute before:left-0 before:top-0 before:bottom-0 before:w-16 before:z-10 before:pointer-events-none
                before:bg-gradient-to-r before:from-white before:to-transparent
                after:absolute after:right-0 after:top-0 after:bottom-0 after:w-16 after:z-10 after:pointer-events-none
                after:bg-gradient-to-l after:from-white after:to-transparent
            ">
                <div className="flex w-max shrink-0 animate-marquee-stack-reverse items-center gap-1 md:gap-3 lg:gap-6">
                    {[...metrics, ...metrics].map((item, i) => (
                        <Fragment key={i}>
                            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-black/10 bg-white text-body-small font-medium text-gray-800 whitespace-nowrap">
                                <span
                                    className="font-medium text-body-small"
                                    style={{ background: 'linear-gradient(90deg, #8E24AA, #3949AB)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                                >
                                    {item.num}
                                </span>
                                {item.label}
                            </span>
                            <span className="text-gray-300 text-body-default select-none">·</span>
                        </Fragment>
                    ))}
                </div>
            </div>

        </section>
    )
}