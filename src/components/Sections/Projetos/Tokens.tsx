interface TokenProps {
    children: React.ReactNode; 
}

export default function Token({ children }: TokenProps){
    return (
        <span className={`text-body-small font-medium px-2 py-0 bg-[#4361EE]/15 text-[#4361EE] rounded-xl`}>{children}</span>
    )
}