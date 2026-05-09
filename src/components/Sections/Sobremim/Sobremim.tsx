'use client'

import Button from '@/components/Custom/Button'
import Icon from '@mdi/react'
import { mdiLinkedin, mdiTrayArrowDown } from '@mdi/js'
import { GraduationCap } from 'lucide-react'
import Link from "next/link";
import Image from 'next/image'
import Photo from '../Hero/Photo'

interface Academic {
    id: number
    title: string
    university: string
    date: string
    description: string
}

interface Profissional {
    id: number
    title: string
    job: string
    date: string
    description: string
}

interface Stack {
    id: number,
    src: string,
    name: string
}

const dataAcademic: Academic[] = [
    {
        id: 1,
        title: "Técnologo em Análise e Desenvolvimento de Sistemas",
        university: "Centro Universitário Fundação Santo André",
        date: "(08/2023 - 07/2025)",
        description: "Formação com foco em desenvolvimento de software, estruturas de dados, algoritmos e design de sistemas.",
    },
    {
        id: 2,
        title: "Técnico em Web Full Stack",
        university: "Digital House",
        date: "(09/2021 - 04/2022)",
        description: "Desenvolvimento de aplicações completas com Figma, NodeJs, Banco de Dados e Deployment seguindo praticas Ágil Scrum.",
    },
    {
        id: 3,
        title: "Web Developer",
        university: "Agile",
        date: "(05/2015 - 05/2016)",
        description: "Desenvolvimento de conceitos básicos sobre design como uso do corelDraw e photoshop, animações utilizando o flash e construção de páginas básicas utilizando Html e Css.",
    },
]

const dataProfissional: Profissional[] = [
    {
        id: 1,
        title: "Freelancer",
        job: "Product Designer & Desenvolvedor Front-end",
        date: "(01/2026 - Atualmente)",
        description: "Projetos independentes do design à implementação, assumindo desde a definição do problema até a entrega técnica.",
    }
]

const tools: Stack[] = [
    {
        id: 1,
        src: '/stack/html.svg',
        name: 'html'
    },
    {
        id: 2,
        src: '/stack/css.svg',
        name: 'css'
    },
    {
        id: 4,
        src: '/stack/javascript.svg',
        name: 'javascript'
    },
    {
        id: 5,
        src: '/stack/typescript.svg',
        name: 'typescript'
    },
    {
        id: 6,
        src: '/stack/reactjs.svg',
        name: 'reactjs'
    },
    {
        id: 7,
        src: '/stack/nextjs.svg',
        name: 'nextjs'
    },
    {
        id: 8,
        src: '/stack/tailwindcss.svg',
        name: 'tailwindcss'
    },
    {
        id: 9,
        src: '/stack/nodejs.svg',
        name: 'nodejs'
    }
]

export default function Sobremim() {
    return (
        <section id="sobre" className="flex flex-col justify-center items-center gap-16 px-3 md:px-6 lg:px-12 py-30 bg-[#EDF3FF] w-full">
            <h3 className="text-center text-h2 text-[#1B263B] font-black">Sobre mim</h3>
            <div className="flex flex-col w-full px-3 gap-6 min-[1300px]:grid min-[1300px]:grid-cols-2">
                <div className="flex flex-col items-center gap-6 bg-white px-6 py-6 md:px-6 lg:px-6 rounded-xl border border-[#5E6472]">
                    <Photo />
                    <h3 className='text-h3 font-bold text-[#1B263B] text-start'>Gabriel Miranda</h3>
                    <p className="text-start text-body-default font-normal text-[#5E6472]">
                        Sou Product Designer e Desenvolvedor Front-end em início de carreira, com foco em criar experiências digitais claras, funcionais e bem estruturadas.
                        Tenho interesse em entender o problema antes da solução, buscando unir experiência do usuário, design de interface e desenvolvimento para construir produtos consistentes.
                        Ao longo dos meus estudos e projetos práticos, atuei desde a definição de fluxos e regras de negócio até a criação de interfaces e implementação de funcionalidades, sempre com atenção à usabilidade e organização do código.
                        Estou em constante aprendizado e busco oportunidades onde eu possa evoluir tecnicamente, colaborar com outras pessoas e contribuir para produtos que façam sentido para quem usa.
                    </p>
                </div>

                <aside className="flex flex-col gap-2">
                    <div className='flex flex-col gap-6 bg-white p-6 rounded-xl border border-[#5E6472]'>
                        <div className="flex items-center gap-2 w-full">
                            <GraduationCap size={24} color={'#4361EE'} />
                            <h4 className="text-xl md:text-2xl font-bold text-[#1B263B] text-wrap">Currículo Profissional</h4>
                        </div>
                        {dataProfissional.map((item, index) => {
                            return (
                                <div key={index} className="w-full">
                                    <article key={item.id} className='flex flex-col gap-3 w-full border-l-8 border-[#4361EE]'>
                                        <strong className="pl-6 text-body-default font-bold text-[#1B263B]">{item.title}</strong>
                                        <p className="pl-6 text-body-default font-medium text-[#5E6472]">{`${item.job} - ${item.date}`}</p>
                                        <p className="pl-6 text-body-default font-normal text-[#5E6472]">{item.description}</p>
                                    </article>
                                </div>
                            )
                        })}
                    </div>

                    <div className='flex flex-col gap-6 bg-white p-6 rounded-xl border border-[#5E6472]'>
                        <div className="flex items-center gap-2 w-full">
                            <GraduationCap size={24} color={'#4361EE'} />
                            <h4 className="text-xl md:text-2xl font-bold text-[#1B263B] text-wrap">Currículo Acadêmico</h4>
                        </div>
                        {dataAcademic.map((item, index) => {
                            return (
                                <div key={index} className="w-full">
                                    <article key={item.id} className='flex flex-col gap-3 w-full border-l-8 border-[#4361EE]'>
                                        <strong className="pl-6 text-body-default font-bold text-[#1B263B]">{item.title}</strong>
                                        <p className="pl-6 text-body-default font-medium text-[#5E6472]">{`${item.university} - ${item.date}`}</p>
                                        <p className="pl-6 text-body-default font-normal text-[#5E6472]">{item.description}</p>
                                    </article>
                                </div>
                            )
                        })}
                    </div>
                </aside>
            </div>

            <div className="w-full overflow-hidden px-2 py-6">
                <div className="flex w-max shrink-0 animate-marquee-stack-forward items-center gap-6 lg:gap-24">
                    {[...tools, ...tools].map((item, index) => (
                        <Image
                            key={`${item.id}-${index}`}
                            src={item.src}
                            alt={item.name}
                            width={56}
                            height={56}
                            className="h-14 w-14 shrink-0 object-contain"
                        />
                    ))}
                </div>
            </div>

            <div className='flex flex-col gap-4 items-center'>
                <h4 className="text-center text-h4 font-bold text-[#1B263B] w-full">Você pode conhecer mais sobre minha trajetória e experiências em:</h4>

                <div className="flex flex-col md:flex-row md:justify-center lg:flex-row lg:justify-center px-6 gap-6">
                    <Link href="https://www.linkedin.com/in/gabriel-miranda-363269205/" target="_blank" className='w-full'>
                        <Button variant='secundary' className="flex justify-center items-center gap-2 text-[#ffffff] w-full text-body-lead font-bold py-4 px-6 max-w-71 rounded-xl">
                            <Icon path={mdiLinkedin} size={1} />
                            Linkedin
                        </Button>
                    </Link>

                    <Link href="/gabrielmiranda_curriculo.pdf" download="gabrielmiranda_curriculo.pdf" className='w-full'>
                        <Button variant='primary' className="flex justify-center items-center gap-2 text-[#ffffff] w-full text-body-lead font-bold py-4 px-6 max-w-71 rounded-xl">
                            <Icon path={mdiTrayArrowDown} size={1} />
                            Curriculo
                        </Button>
                    </Link>
                </div>
            </div>

        </section>
    )
}