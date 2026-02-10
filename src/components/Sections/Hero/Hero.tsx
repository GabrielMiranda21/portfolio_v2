import Button from "@/components/UI/Button";
import Photo from "./Photo";
import { mdiTrayArrowDown } from "@mdi/js";
import Icon from "@mdi/react";

// para gradientes a gente usa "to-" quando querermos apenas 2 cores mas caso quisermos algo diferente adicionamos "via-"
const gradientHero:string = 'bg-gradient-to-b from-[#005CA9] to-[#00A4E5]'

export default function Hero () {
    return (
        <section className={`flex flex-col justify-center items-center text-center gap-6 ${gradientHero} py-60 px-6`}>
            <Photo />
            <div>
                <strong className="font-montserrat font-extrabold text-center text-[#EBFF77] text-4xl">Gabriel Miranda</strong>
                <h1 className="font-montserrat font-extrabold text-center text-[#ffffff] text-4xl">Product Designer & Desenvolvedor Full Stack</h1>
            </div>
            <p className="font-poppins font-normal text-center text-[#ffffff] text-2xl">Transformo ideias em produtos digitais claros, eficientes e usáveis.</p>
            <div className="flex flex-col justify-center items-center gap-6 w-full md:flex-row lg:flex-row">
                <Button variant='cta' className=" text-[#1B263B] text-lg py-4 px-6 flex-nowrap md:w-71 lg:w-71 rounded-xl">Explorar meu trabalho</Button> 
                <Button variant="primary" className="flex justify-center items-center flex-nowrap gap-4 text-[#ffffff] text-lg py-4 px-6 md:w-71 lg:w-71 rounded-xl">
                    <Icon path={ mdiTrayArrowDown } size={1}/>
                    Curriculo
                </Button>
            </div>
        </section>
    )
}