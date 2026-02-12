'use client'

import Button from "@/components/UI/Button"
import { useState } from "react"

export default function Project(){
    const [activeTab, setActiveTab] = useState<'web' | 'design'>('web');
    
    return (
        <section className="flex flex-col justify-center bg-[#EDF3FF] py-18 px-6">
            <h3 className="font-black text-[32px] text-center text-[#1B263B]">Projetos em destaque</h3>

            <article>
                <div className="flex p-2">
                    <Button
                        onClick={() => setActiveTab('web')}
                        variant={activeTab === 'web' ? 'primary' : 'none'}
                        className="flex justify-center items-center text-xl font-normal rounded-l-lg px-6 py-2"
                    >
                        Web
                    </Button>
                    <Button
                        onClick={() => setActiveTab('design')}
                        variant={activeTab === 'design' ? 'primary' : 'none'}
                        className="flex justify-center items-center text-xl font-normal rounded-r-lg w-auto px-6 py-2"
                    >
                        Design
                    </Button>
                </div>
            </article>
        </section>
    )
}