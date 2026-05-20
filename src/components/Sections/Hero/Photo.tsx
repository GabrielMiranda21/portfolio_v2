import Image from "next/image";

export default function Photo(){
    return (
        <div className="rounded-full w-50 h-50 overflow-hidden relative">
            <Image
                src={'/perfil.webp'}
                alt='photoPerfil'
                fill
                sizes="50px"
                className="object-cover"
            />
        </div>
    )
}