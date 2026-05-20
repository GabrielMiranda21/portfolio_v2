import Icon from "@mdi/react";
import { IconProps } from "@mdi/react/dist/IconProps";

type ButtonVariantBackgroundColor = 'cta' | 'primary' | 'secundary' | 'terciary' | 'brand' | 'black' | 'surface' | 'none';

const buttonColors:Record<string, string>  = {
    cta: "bg-gradient-to-r from-[#C47DE8] via-[#7B8FF0] to-[#45D9F5] text-[#EDF3FF] transition-transform hover:scale-115 shadow-2xs",
    primary: "bg-[#1B263B] text-[#EDF3FF] hover:brightness-110 hover:saturate-110",
    secundary: "bg-[#3B82F6] text-[#EDF3FF] hover:brightness-110 hover:saturate-110",
    terciary: "bg-[#10B981] text-[#EDF3FF] hover:brightness-110 hover:saturate-110 transition-transform  hover:scale-105",
    brand: "bg-[#4361EE] text-[#EDF3FF] hover:brightness-110 hover:saturate-95",
    black: "bg-[#000000] text-[#EDF3FF] hover:brightness-110 hover:saturate-110",
    surface: "bg-transparent border-solid border border-[#EDF3FF] text-[#EDF3FF] transition-all duration-300 ease-in-out hover:border[#1B263B] hover:bg-[#EDF3FF] hover:text-[#1B263B]",
    none: "bg-transparent border-solid border border-[#1B263B] text-[#1B263B]"
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

