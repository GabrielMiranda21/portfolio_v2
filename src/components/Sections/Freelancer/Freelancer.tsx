import Button from "@/components/Custom/Button";

export default function Freelancer() {
    return (
        <section id="experiencia" className="flex flex-col items-center gap-6 px-6 md:px-56 py-30 bg-white w-full">
            <h3 className="text-center text-h2 text-[#1B263B] font-black">Experiência em projetos reais, do design à implementação</h3>
            <p className="text-center text-body-default font-normal text-[#5E6472]">Além de atuar como Product Designer e Desenvolvedor Front-end, desenvolvo projetos independentes para pessoas e empresas, assumindo responsabilidades que vão da definição do problema à entrega técnica.</p>
            <span className="text-center font-bold text-h3 text-[#1B263B]">Quer conversar sobre um projeto ou oportunidade?</span>
            <Button variant="cta" className=" flex justify-center items-center p-6 font-bold text-2xl text-[#1B263B] border border-[#4361EE] rounded-xl max-w-[280px]">Entrar em contato</Button>
        </section>
    )
}