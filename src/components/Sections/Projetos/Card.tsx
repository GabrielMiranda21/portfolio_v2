import Button from "@/components/UI/Button"
import Token from "./Tokens"
import Image from "next/image"

import Icon from "@mdi/react";
import { mdiLinkPlus, mdiGithub } from "@mdi/js";
import { MdOutlinePageview } from "react-icons/md"

/**
 * Aqui nesse caso você não importa o readFile porque o component ele não processa dados ele apenas mostra as informações nesse contexto você precisa apenas do molde
 * para enviar como propriedades no componente e no página onde é exibido os cards você importa os meta dados a serem usados.
 */
interface ProjectProps {
    data: {
        title: string
        description: string
        tags: string[]
        img: string
        type: string
    }
    content: string
}

// Lembresse que na desestruturação você cria uma váriavel que recebe os dados 'project'[variavel] recebe um objeto project com chaves da interface ProjectProps
export default function Card({project}:{ project: ProjectProps}){ 
    return (
        <article className="w-81 h-[670px] bg-white">
            <div className="relative w-full h-52">
                <Image
                    src={project.data.img}
                    alt="imageProject"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col justify-start items-start p-6">
                <h2 className='font-montserrat font-bold text-lg text-[#1B263B]'>{project.data.title}</h2>
                <p className='font-poppins font-normal text-md text-[#5E6472]'>{project.data.description}</p>
            </div>
            <Token>{project.data.tags}</Token>
            <div className="flex flex-wrap gap-6">
                <Button variant={'primary'} className="w-full py-2 px-2 rounded-xl">
                    <Icon path={mdiLinkPlus} size={1}/>
                    Demo
                </Button>
                <Button variant={'secundary'} className="w-full py-2 px-2 rounded-xl">
                    <Icon path={mdiGithub} size={1}/>
                    Github
                </Button>
                <Button variant={'terciary'} className="w-full py-2 px-2 rounded-xl">
                    <MdOutlinePageview  size={24} color="black"/>
                    Ver detalhes
                </Button>
            </div>
        </article>
    )
}
// Para o projeto ser exibido é necessário enviar as propriedades dos arquivos .md