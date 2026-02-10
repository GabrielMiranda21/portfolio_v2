import Button from "@/components/UI/Button";

// para gradientes a gente usa "to-" quando querermos apenas 2 cores mas caso quisermos algo diferente adicionamos "via-"
const gradientHero:string = 'bg-gradient-to-b from-[#005CA9] to-[#00A4E5]'

export default function Hero ({...props}) {
    return (
        <section className={`flex flex-col justify-center text-center ${gradientHero} py-60 px-6`}>
            <div>
                <strong className="font-montserrat font-bold text-center text-[#EBFF77] text-4xl">Gabriel Miranda</strong>
                <h1 className="font-montserrat font-bold text-center text-[#ffffff] text-4xl">Product Designer & Desenvolvedor Full Stack</h1>
            </div>
            <p className="font-poppins font-normal text-center text-[#ffffff] text-2xl">Transformo ideias em produtos digitais claros, eficientes e usáveis.</p>
            <Button variant='cta' className="font-montserrat font-bold text-center text-[#1B263B] text-lg py-2 px-6 w-full">Explorar meu trabalho</Button> 
        </section>
    )
}