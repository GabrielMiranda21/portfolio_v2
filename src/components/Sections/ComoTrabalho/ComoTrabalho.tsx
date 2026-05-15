import { LucideIcon, Puzzle, Network, Paintbrush, TrendingUp } from 'lucide-react';

interface MenuItem {
    id: number,
    name: string,
    content: string,
    icon: LucideIcon
}

const Menu:MenuItem[] = [
    {
        id: 1,
        name: 'Entendimento do contexto',
        content: 'Entendo o problema, o objetivo e as necessidades antes de começar.',
        icon: Puzzle
    },
    {
        id: 2,
        name: 'Estruturação da experiência',
        content: 'Organizo fluxos, telas e interações para garantir uma experiência simples e coerente.',
        icon: Network
    },
    {
        id: 3,
        name: 'Design e desenvolvimento',
        content: 'Crio interfaces e implemento funcionalidades com foco em usabilidade e qualidade.',
        icon: Paintbrush
    },
    {
        id: 4,
        name: 'Aprendizado e melhoria contínua',
        content: 'Reviso o trabalho com base em feedbacks buscando evoluir a cada projeto.',
        icon: TrendingUp
    }
]

export default function ComoTrabalho(){
    return (
        <section id="comoTrabalho" className="flex flex-col gap-6 py-28 px-6 bg-[linear-gradient(135deg,#12003a_0%,#3949AB_55%,#00ACC1_100%)] text-center">
            <h2 className="font-montserrat text-h2 font-extrabold text-white">Como trabalho</h2>
            <p className="font-poppins text-body-default font-normal text-white/70">Busco entender o problema, estruturar a experiência e desenvolver soluções digitais de forma clara e organizada.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 min-[1300px]:flex min-[1300px]:justify-between gap-6 w-full h-auto">
                {
                    Menu.map(item => {
                        const Icon = item.icon;
                        return (
                            <div key={item.id} className="flex flex-col justify-start items-center gap-2 shadow w-full p-6 bg-white rounded-xl transition-transform hover:scale-110 md:hover:scale-105">
                                <Icon size={48} color="#1B263B" strokeWidth={1.5} aria-hidden="true"/>
                                <h5 className="text-h5 font-semibold text-[#1B263B]">{item.name}</h5>
                                <p className="text-body-default font-normal text-[#5E6472]">{item.content}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}