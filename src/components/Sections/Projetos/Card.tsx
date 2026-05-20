'use client'

import Button from "@/components/Custom/Button"
import Token from "./Tokens"
import Image from "next/image"

import ReactMarkDown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useRef, useState, useEffect, use } from "react";
import { ProjectProps } from "@/lib/projects";
import Link from "next/link";
import { createPortal } from "react-dom";

import Icon from "@mdi/react";
import { mdiLinkPlus, mdiGithub, mdiClose } from "@mdi/js";
import { SiFigma } from 'react-icons/si'
import { MdOutlinePageview } from "react-icons/md";


const responsiveCard = 'w-[250px] md:w-[300px] lg:w-full'

export default function Card({ project }: { project: ProjectProps }) {
    const dialogRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const openModal = () => {
        setIsOpen(true)
    };
    const closeModal = () => {
        setIsOpen(false)
        document.body.style.overflow = 'unset';
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <article className={`
            flex flex-col ${responsiveCard} snap-center shrink-0 pb-6 gap-4 rounded-xl bg-white 
        `}>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 z-[9997]"
                    onClick={closeModal}
                    aria-hidden="true"
                />
            )}

            {isOpen && mounted && createPortal(
                <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={closeModal}
                    />

                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-title"
                        tabIndex={-1}
                        ref={dialogRef}
                        className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] shadow-2xl overflow-hidden flex flex-col z-[10001] pt-10 pb-6 pr-2 md:pr-6"
                    >
                        <div className="absolute flex justify-between items-start h-auto px-6 md:px-10 w-full bg-white">
                            <header className="mb-4">
                                <strong className="font-black text-h3 text-[#1B263B]">Sobre</strong>
                            </header>
                            <button
                                onClick={closeModal}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors z-50 cursor-pointer mr-8"
                            >
                                <Icon path={mdiClose} size={1.5} color={"#5E6472"} />
                            </button>
                        </div>

                        <div className="overflow-y-auto p-6 md:px-10 md:pt-13 rounded-xl">

                            <div className="prose prose-slate max-w-none flex flex-col">
                                <ReactMarkDown remarkPlugins={[remarkGfm]} components={{
                                    h1: ({ ...props }) => <h2 {...props} className="font-bold text-h5 text-[#1B263B] mt-8" />,
                                    h2: ({ ...props }) => <h3 {...props} className="font-bold text-h5 text-[#1B263B] mt-6" />,
                                    p: ({ ...props }) => <p {...props} className="font-normal text-body-default text-[#5E6472] leading-relaxed" />,
                                    ul: ({ ...props }) => <ul className="font-normal text-body-default list-disc pl-6 flex flex-col text-[#5E6472]" {...props} />,
                                    li: ({ ...props }) => <li className="font-normal text-body-default marker:text-[#1B263B]" {...props} />
                                }}>
                                    {project.content
                                        ?.replace(/\\n/g, '\n')
                                        .replace(/([^\n])(#{1,6} )/g, '$1\n\n$2')
                                        .replace(/([^\n])(- )/g, '$1\n$2')
                                        .trim()
                                        || "Este projeto ainda não possui uma descrição detalhada."
                                    }

                                </ReactMarkDown>
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
            <div className="relative w-full h-40 md:h-50 lg:h-50 shrink-0 aspect-video">
                <Image
                    src={project.thumbnail || ""}
                    alt="imageProject"
                    fill
                    loading="eager"
                    className="object-cover rounded-t-xl h-auto"
                    sizes="(max-width: 768px) 100vw, 400px"
                />
            </div>
            <section className="flex flex-col gap-4 px-4 justify-between h-full">
                <div className="flex flex-col justify-start items-start gap-4 flex-wrap flex-1">
                    <h2 className='font-bold text-h5 text-[#1B263B]'>{project.title}</h2>
                    <p className='font-normal text-body-default text-[#5E6472]'>{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {project.techStack.map(tag => {
                        return <Token key={tag}>{tag}</Token>
                    })}
                </div>
                <div className="flex flex-wrap gap-2 justify-between h-auto">
                    <div className="flex w-full gap-2">
                        <Link href={project.liveUrl || ""} target="_blank" className="w-full">
                            <Button
                                variant={'primary'}
                                className={`
                                        flex justify-center items-center gap-2 w-full py-2 px-2 rounded-xl
                                        ${project.liveUrl ? 'disabled:bg-gray-500' : 'bg-[#1B263B]'}
                                    `}
                                disabled={!project.liveUrl}
                                aria-label="Ver site em produção"
                            >
                                <Icon path={mdiLinkPlus} size={1} />
                                Ver site
                            </Button>
                        </Link>

                        {project.category === 'Web' ? (
                            <Link href={project.repoUrl || ""} target="_blank" className="w-full">
                                <Button
                                    variant="black"
                                    className={`
                                            flex justify-center items-center gap-2 w-full py-2 px-2 rounded-xl
                                            ${project.repoUrl ? 'disabled:bg-gray-500' : 'bg-[#000000]'}
                                        `}
                                    disabled={!project.repoUrl}
                                    aria-label="Ver projetos no GitHub"
                                    >
                                    <Icon path={mdiGithub} size={1} />
                                    Github
                                </Button>
                            </Link>
                        ) : (
                            <Link href={project.repoUrl || ""} target="_blank" className="w-full">
                                <Button
                                    variant="brand"
                                    className={`
                                                flex justify-center items-center gap-2 w-full py-2 px-2 rounded-xl
                                                ${project.repoUrl ? 'disabled:bg-gray-500' : 'bg-[#4361EE]'}
                                            `}
                                    disabled={!project.repoUrl}
                                    aria-label="Ver layout no Figma"
                                >
                                    <SiFigma size={24} style={{ strokeWidth: "1px" }} />
                                    Figma
                                </Button>
                            </Link>
                        )}
                    </div>
                    <Button
                        variant={'terciary'}
                        onClick={openModal}
                        className={`
                                flex justify-center items-center gap-2 w-full py-2 px-2 rounded-xl
                                ${project.content === "" ? 'disabled:bg-gray-500' : 'bg-[#10B981]'}
                            `}
                        aria-label="Ver detalhes"
                    >
                        <MdOutlinePageview size={24} color="#EDF3FF" />
                        Ver detalhes
                    </Button>
                </div>

            </section>
        </article>
    )
}