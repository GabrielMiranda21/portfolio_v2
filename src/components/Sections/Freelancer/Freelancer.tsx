import Button from "@/components/Custom/Button";
import Link from "next/link";

export default function Freelancer() {

    const number = "11956693730";
    const finalMessage = "Olá, podemos conversar?";
    const link = `https://wa.me/${number}?text=${finalMessage}`;
    
    return (
        <section id="experiencia" className="flex flex-col items-center gap-6 px-6 lg:12 py-30 bg-white w-full">
            <h2 className="text-center text-h2 text-[#1B263B] font-black max-w-200">Experiência em projetos reais, do design à implementação</h2>
            <p className="text-center text-body-default font-normal text-[#5E6472] max-w-250">Além de atuar como Product Designer e Desenvolvedor Front-end, desenvolvo projetos independentes para pessoas e empresas, assumindo responsabilidades que vão da definição do problema à entrega técnica.</p>
            <span className="text-center font-bold text-h3 text-[#1B263B]">Quer conversar sobre um projeto ou oportunidade?</span>

            <Link
                href={link}
                target="_blank"
            >
                <Button 
                    variant="cta" 
                    className="
                        flex justify-center items-center px-8 py-4 font-bold text-h4 text-[#1B263B] border border-[#4361EE] rounded-xl max-w-70
                    "
                    aria-label="Entrar em contato"
                >
                    Entrar em contato
                </Button>

            </Link>
        </section>
    )
}