'use client'

import Button from "@/components/Custom/Button"
import Token from "./Tokens"
import Image from "next/image"

import ReactMarkDown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useRef, useState, useEffect } from "react";
import { ProjectProps } from "@/lib/projects";

import Icon from "@mdi/react";
import { mdiLinkPlus, mdiGithub, mdiClose } from "@mdi/js";
import { SiFigma } from 'react-icons/si'
import { MdOutlinePageview } from "react-icons/md";


const responsiveCard = 'min-w-[280px] md:w-[300px] lg:w-[320px]'

// Lembresse que na desestruturação você cria uma váriavel que recebe os dados 'project'[variavel] recebe um objeto project com chaves da interface ProjectProps
export default function Card({project}:{ project: ProjectProps}){ 
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [ isOpen, setIsOpen ] = useState(false);
    const openModal = () => { 
        dialogRef.current?.showModal() 
        setIsOpen(true) 
    };
    const closeModal = () => { 
        dialogRef.current?.close() 
        setIsOpen(false)
        document.body.style.overflow = 'unset'; // Força a liberação do scroll
    };

    useEffect(() => { // Serve para efeitos externos do site. 3 parametros: Estado, função de limpeza(Opcional) e monitoramento de estado
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);
    
    

    return (
        <article className={`flex flex-col ${responsiveCard} snap-center h-125 pb-6 gap-4 rounded-xl bg-white`}>
            <dialog ref={dialogRef} onClose={closeModal} className="fixed inset-0 m-auto rounded-3xl max-w-2xl w-[90vw] max-h-[80vh] backdrop:bg-black/60 shadow-2xl border-none p-0 overflow-hidden">
                <div className="flex flex-col bg-white h-full max-h-[80vh] overflow-y-auto p-4 md:p-12 gap-3">
                    <div className="flex justify-between items-center w-full">
                        <strong className="font-black text-3xl text-[#1B263B]">Sobre</strong>
                        <button onClick={closeModal} className="cursor-pointer">
                            <Icon path={mdiClose} size={1.5} color={"#5E6472"}></Icon>
                        </button>
                    </div>
                    <div className="prose prose-slate max-w-none pb-4">
                        <ReactMarkDown remarkPlugins={[remarkGfm]}  components={{
                            h1: ({ node, ...props }) => <h2 {...props} className="font-montserrat font-bold text-xl text-[#1B263B] mt-6"/>,
                            p: ({ node, ...props }) => <p {...props} className="font-poppins font-normal text-md text-[#5E6472] leading-relaxed"/>,
                            ul: ({node, ...props}) => <ul className="list-disc list-outside pl-6 flex flex-col text-[#5E6472]" {...props} />,
                            li: ({node, ...props}) => <li className="font-poppins marker:text-[#1B263B]" {...props} />
                        }}> 
                            {project.content}
                        </ReactMarkDown>
                    </div>
                </div>
            </dialog>
            <div className="relative w-full h-60">
                <Image
                    src={project.data.img}
                    alt="imageProject"
                    fill
                    className="object-cover rounded-t -xl w-full"
                />
            </div>
            <section className="flex flex-col justify-between gap-4 px-6 h-full">
                <div className="flex flex-col justify-start items-start gap-2 flex-wrap flex-1">
                    <h4 className='font-bold text-h4 text-[#1B263B]'>{project.data.title}</h4>
                    <p className='font-normal text-body-default text-[#5E6472]'>{project.data.description}</p>
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
                        <Button variant={'terciary'} className="flex justify-center items-center gap-2 w-full py-2 px-2 rounded-xl" onClick={openModal}>
                            <MdOutlinePageview  size={24} color="#EDF3FF"/>
                            Ver detalhes
                        </Button>
                    </div>
                </div>
            </section>
        </article>
    )
}