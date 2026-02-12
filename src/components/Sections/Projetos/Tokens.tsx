interface TextToken {
    children: string[]
}

export default function Token({children}: TextToken){
    return (
        <span className={`text-base px-2 py-0 bg-[#4361EE]/15 text-[#4361EE] rounded-xl`}>{children}</span>
    )
}