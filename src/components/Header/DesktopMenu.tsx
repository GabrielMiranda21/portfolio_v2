import { Menu } from "@/constants/Menu";
import Link from "next/link";

export default function DesktopMenu() {
    return (
        <nav className="font-poppins">
            <ul className="list-none flex gap-9 text-[#1B263B] font-normal">
                {Menu.map((item) => {
                    return (
                        <li key={item.id} className="hover:font-medium">
                            <Link href={`#${item.id}`}>
                                {item.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
