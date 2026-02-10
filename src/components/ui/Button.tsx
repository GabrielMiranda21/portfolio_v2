type ButtonVariant = 'cta' | 'primary' | 'secundary' | 'terciary';

const button:Record<string, string>  = {
    cta: "bg-[linear-gradient(45deg,#94CCF9,#C7FFD8)]",
    primary: "#1B263B",
    secundary: "#3B82F6",
    terciary: "#10B981"
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: ButtonVariant
}

export default function Button({variant, children, ...props}: ButtonProps){
    return <button
        className={`${button[variant]}`}
        {...props}
    >
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

