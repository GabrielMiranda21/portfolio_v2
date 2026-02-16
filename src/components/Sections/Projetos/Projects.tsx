'use client'

import Card from "@/components/Sections/Projetos/Card";
import Button from "@/components/UI/Button"
import { ProjectProps } from "@/lib/projects"
import { useState } from "react"

export interface ProjectSectionProps {
  initialProjects: ProjectProps[]
}

export default function Project({ initialProjects }: ProjectSectionProps ){
    const [activeTab, setActiveTab] = useState<'Web' | 'Design'>('Web');
    
    return (    
        <section className="flex flex-col justify-center gap-6 bg-[#EDF3FF] py-18 px-6 transform-gpu backface-hidden">
            <h3 className="font-black text-[32px] text-center text-[#1B263B]">Projetos em destaque</h3>

            <div className="flex flex-col items-start gap-6 w-full scroll-auto">
                <div className="flex p-2">
                    <Button
                        onClick={() => setActiveTab('Web')}
                        variant={activeTab === 'Web' ? 'primary' : 'none'}
                        className="flex justify-center items-center text-xl font-medium rounded-l-lg px-6 py-2"
                    >
                        Web
                    </Button>
                    <Button
                        onClick={() => setActiveTab('Design')}
                        variant={activeTab === 'Design' ? 'primary' : 'none'}
                        className="flex justify-center items-center text-xl font-medium rounded-r-lg w-auto px-6 py-2"
                    >
                        Design
                    </Button>
                </div>
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 overflow-hidden scrollbar-hide w-full h-full">
                    {
                        initialProjects
                            .filter(item => { // Filter apenas valida dados e permite passar baseado na validação se for "Banana" passa somente "Banana" e retorna uma nova lista
                                return item.data.type === activeTab 
                            })
                            .map(item => {
                                return <Card key={item.data.title} project={item}></Card> // Fabrica os cards pra gente acessando o objeto que enviamos pelas props
                            })
                    }
                </div>
            </div>
        </section>
    )
}