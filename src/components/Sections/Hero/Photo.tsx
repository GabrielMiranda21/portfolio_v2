import Image from "next/image";

export default function Photo(){
    return (
        <div className="rounded-full w-50 h-50 overflow-hidden relative">
            <Image
                src={'/perfil.png'}
                alt='photoPerfil'
                fill
                className="object-cover"
            />
        </div>
    )
}