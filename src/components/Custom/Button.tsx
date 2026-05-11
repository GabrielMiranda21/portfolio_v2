import Icon from "@mdi/react";
import { IconProps } from "@mdi/react/dist/IconProps";

type ButtonVariantBackgroundColor = 'cta' | 'primary' | 'secundary' | 'terciary' | 'brand' | 'black' | 'none';

const buttonColors:Record<string, string>  = {
    cta: "bg-gradient-to-r from-[#c47de8] via-[#7b8ff0] to-[#45d9f5] text-[#EDF3FF] transition-transform hover:scale-115",
    primary: "bg-[#1B263B] text-[#EDF3FF] hover:brightness-110 hover:saturate-125",
    secundary: "bg-[#3B82F6] text-[#EDF3FF] hover:brightness-110 hover:saturate-125",
    terciary: "bg-[#10B981] text-[#EDF3FF] hover:brightness-110 hover:saturate-125",
    brand: "bg-[#4361EE] text-[#EDF3FF] hover:brightness-110 hover:saturate-125",
    black: "bg-[#000000] text-[#EDF3FF] hover:brightness-110 hover:saturate-125",
    none: "bg-[#EDF3FF] border-solid border border-[#1B263B] text-[#1B263B]"
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: ButtonVariantBackgroundColor
    icon?: string
    iconProps?: Partial<IconProps>
}

export default function Button({variant, children, icon, iconProps, className, ...props}: ButtonProps){
    return <button
        className={`text-body-default font-bold text-center cursor-pointer ${buttonColors[variant]} ${className || ""}`}
        {...props}
    >
        {/*Renderização Condicional*/}
        {icon && <Icon path={icon} size={1} />}
        {children}
    </button>
}

/**
 * React.ButtonHTMLAttributes: É uma interface pronta do próprio React que contém todos os atributos possíveis de um 
 * elemento <button> (como id, className, style, onMouseOver, etc.).
 * 
 * <HTMLButtonElement>: Este é um Generic. Ele especifica para o React que esses atributos pertencem exatamente a um 
 * elemento de botão do DOM. Isso ajuda o TypeScript a saber, por exemplo, que o evento de clique terá um target que é 
 * um botão.
 */

