'use client'

import Button from "@/components/UI/Button"
import Card from "@/components/Sections/Projetos/Card";
import { filesText } from "@/lib/projects"

import { useState } from "react"

const project = filesText();

export default function Project(){
    const [activeTab, setActiveTab] = useState<'web' | 'design'>('web');
    
    return (
        <section className="flex flex-col justify-center gap-6 bg-[#EDF3FF] py-18 px-6">
            <h3 className="font-black text-[32px] text-center text-[#1B263B]">Projetos em destaque</h3>

            <div className="flex flex-col items-start gap-6 w-full scroll-auto">
                <div className="flex p-2">
                    <Button
                        onClick={() => setActiveTab('web')}
                        variant={activeTab === 'web' ? 'primary' : 'none'}
                        className="flex justify-center items-center text-xl font-medium rounded-l-lg px-6 py-2"
                    >
                        Web
                    </Button>
                    <Button
                        onClick={() => setActiveTab('design')}
                        variant={activeTab === 'design' ? 'primary' : 'none'}
                        className="flex justify-center items-center text-xl font-medium rounded-r-lg w-auto px-6 py-2"
                    >
                        Design
                    </Button>
                </div>
            </div>
        </section>
    )
}