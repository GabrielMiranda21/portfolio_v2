'use client'

import Button from "@/components/UI/Button"
import Token from "./Tokens"
import Image from "next/image"

import Icon from "@mdi/react";
import { mdiLinkPlus, mdiGithub } from "@mdi/js";
import { SiFigma } from 'react-icons/si'
import { MdOutlinePageview } from "react-icons/md";
import { ProjectProps } from "@/lib/projects";

import ReactMarkDown from "react-markdown"
import { useRef, useState } from "react";

const responsiveCard = 'min-w-[280px] md:w-[300px] lg:w-[320px]'

// Lembresse que na desestruturação você cria uma váriavel que recebe os dados 'project'[variavel] recebe um objeto project com chaves da interface ProjectProps
export default function Card({project}:{ project: ProjectProps}){ 
    const [ isOpen, setIsOpen ] = useState(false)
    const modal = useRef<HTMLDialogElement>(null);

    return (
        <article className={`flex flex-col ${responsiveCard} snap-center h-[560px] pb-6 gap-4 rounded-xl bg-white`}>
            <dialog ref={modal} className="rounded-2xl p-0 backdrop:bg-black/60">
                <ReactMarkDown>
                    {project.content}
                </ReactMarkDown>
            </dialog>
            <div className="relative w-full h-auto">
                <Image
                    src={project.data.img}
                    alt="imageProject"
                    width={326}
                    height={220}
                    className="object-cover rounded-t-xl w-full h-[220px]"
                />
            </div>
            <section className="flex flex-col justify-between gap-4 px-6 h-full">
                <div className="flex flex-col justify-start items-start gap-2 flex-wrap flex-1">
                    <h2 className='font-montserrat font-bold text-lg text-[#1B263B]'>{project.data.title}</h2>
                    <p className='font-poppins font-normal text-md text-[#5E6472]'>{project.data.description}</p>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-wrap gap-2">
                        {project.data.tags.map(tag => {
                            return <Token key={tag}>{tag}</Token>
                        })}
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <div className="flex w-full gap-2">
                            <Button variant={'primary'} className="flex justify-center item-center gap-2 w-full py-2 px-2 rounded-xl">
                                <Icon path={mdiLinkPlus} size={1}/>
                                Demo
                            </Button>

                            {project.data.type === 'Web' ? (
                                <Button variant="black" className="flex justify-center items-center gap-2 w-full py-2 px-2 rounded-xl">
                                    <Icon path={mdiGithub} size={1}/>
                                    Github
                                </Button>
                            ) : (
                                <Button variant="brand" className="flex justify-center items-center gap-2 w-full py-2 px-2 rounded-xl">
                                    {/* Aqui você trocaria o ícone para o do Figma */}
                                    <SiFigma size={24} style={{ strokeWidth: "1px" }}/>
                                    Figma
                                </Button>
                            )}
                        </div>
                        
                        <Button variant={'terciary'} className="flex justify-center item-center gap-2 w-full py-2 px-2 rounded-xl" onClick={() => modal.current?.showModal()}>
                            <MdOutlinePageview  size={24} color="#EDF3FF"/>
                            Ver detalhes
                        </Button>
                    </div>
                </div>
            </section>
        </article>
    )
}
// Para o projeto ser exibido é necessário enviar as propriedades dos arquivos .md