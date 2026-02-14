import BackEnd from "./BackEnd";
import Design from "./Design";
import FrontEnd from "./FrontEnd";

export default function Stack(){
    return (
        <section className=" font-montserrat flex flex-col justify-center items-center py-30 px-6 bg-[#ffffff] gap-12 transform-gpu backface-hidden">
            <h2 className="font-black text-[2rem] text-center text-[#1B263B]">Stack e ferramentas</h2>

            <div className="flex flex-col gap-6">
                <Design />
                <FrontEnd />
                <BackEnd />
            </div>
        </section>
    )
}