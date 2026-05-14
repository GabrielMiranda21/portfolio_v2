'use client'

import Card from "@/components/Sections/Projetos/Card";
import Button from "@/components/Custom/Button"
import { ProjectProps } from "@/lib/projects"
import { useState } from "react"

export interface ProjectSectionProps {
    initialProjects: ProjectProps[]
}

export default function Project({ initialProjects }: ProjectSectionProps) {
    const [activeTab, setActiveTab] = useState<'Web' | 'Design'>('Web');

    return (
        <section id="projetos" className="flex flex-col justify-center gap-6 bg-[#EDF3FF] py-18 px-6 transform-gpu backface-hidden">
            <h3 className="font-black text-[2rem] md:text-5xl text-center text-[#1B263B]">Projetos em destaque</h3>

            <div className="flex flex-col items-start gap-6 w-full scroll-auto">
                <div className="flex p-2">
                    <Button
                        onClick={() => setActiveTab('Web')}
                        variant={activeTab === 'Web' ? 'primary' : 'none'}
                        className={`flex justify-center items-center text-body-lead font-normal rounded-l-lg px-6 py-2 ${activeTab === 'Web' ? 'text-white' : 'text-[#1B263B]'}`}
                    >
                        Web
                    </Button>
                    <Button
                        onClick={() => setActiveTab('Design')}
                        variant={activeTab === 'Design' ? 'primary' : 'none'}
                        className={`flex justify-center items-center text-body-lead font-normal rounded-r-lg w-auto px-6 py-2 ${activeTab === 'Design' ? 'text-white' : 'text-[#1B263B]'}`}
                    >
                        Design
                    </Button>
                </div>
                <div className={`
                        flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory gap-3 pb-4 scrollbar-thin w-full h-full
                        [@media(min-width:1024px)_and_(max-width:1172px)]:grid-cols-3 lg:grid lg:grid-cols-4 lg:grid-flow-row
                    `}>
                    {
                        initialProjects
                            .filter(item => item.category === activeTab)
                            .sort((a, b) => {
                                if (a.featured && !b.featured) return -1;
                                if (!a.featured && b.featured) return 1;

                                if (a.id > b.id) return -1;
                                if (a.id < b.id) return 1;

                                return 0;
                            })
                            .map(item => (
                                <Card key={item.id} project={item} />
                            ))
                    }
                </div>
            </div>
        </section>
    )
}