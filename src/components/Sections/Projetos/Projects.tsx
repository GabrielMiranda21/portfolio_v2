import Button from "@/components/UI/Button"
import Card from "./card"

export default function Project(){
    return (
        <section className="flex flex-col justify-center bg-[#EDF3FF] py-18 px-6">
            <h3 className="font-black text-[32px] text-center text-[#1B263B]">Projetos em destaque</h3>

            <article>
                <div className="flex p-2">
                    <Button variant="primary" className="flex justify-center items-center text-xl font-normal rounded-bl-xl">Web</Button>
                    <Button variant="none" className="flex justify-center items-center text-xl font-normal rounded-tr-xl">Design</Button>
                </div>
            </article>
        </section>
    )
}