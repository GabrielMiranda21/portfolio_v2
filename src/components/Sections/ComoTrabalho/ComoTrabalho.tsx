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
        content: 'Procuro compreender o objetivo do projeto, o problema a ser resolvido e as necessidades das pessoas usuárias antes de iniciar o desenvolvimento.',
        icon: Puzzle
    },
    {
        id: 2,
        name: 'Estruturação da experiência',
        content: 'Organizo fluxos, telas e interações para garantir uma experiência simples, coerente e fácil de usar.',
        icon: Network
    },
    {
        id: 3,
        name: 'Design e desenvolvimento',
        content: 'Crio interfaces e implemento as funcionalidades com atenção à usabilidade, clareza visual e qualidade do código.',
        icon: Paintbrush
    },
    {
        id: 4,
        name: 'Aprendizado e melhoria contínua',
        content: 'Reviso o trabalho com base em feedbacks e testes, buscando aprender e evoluir a cada projeto.',
        icon: TrendingUp
    }
]

export default function ComoTrabalho(){
    return (
        <section id='#ComoTrabalho' className="flex flex-col gap-6 py-28 px-6 bg-[#EBFF77] text-center">
            <h2 className="font-montserrat text-[2rem] md:text-5xl lg:text-5xl font-black text-[#1B263B]">Como eu trabalho</h2>
            <p className="font-poppins text-base md:text-lg lg:text-lg font-normal text-[#1B263B]">Busco entender o problema, estruturar a experiência e desenvolver soluções digitais de forma clara e organizada.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 min-[1300px]:flex min-[1300px]:justify-between gap-6 w-full h-auto">
                {
                    Menu.map(item => {
                        const Icon = item.icon;
                        return (
                            <div key={item.id} className="flex flex-col justify-start items-center gap-2 shadow w-full p-6 bg-white rounded-xl">
                                <Icon size={96} color="#5E6472" strokeWidth={1.5} />
                                <strong className="font-montserrat text-lg md:text-xl font-bold text-[#1B263B]">{item.name}</strong>
                                <p className="font-poppins text-base md:text-lg font-normal text-[#5E6472]">{item.content}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}