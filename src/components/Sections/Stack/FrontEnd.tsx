import Icon from "@mdi/react";
import { mdiLanguageHtml5, mdiLanguageCss3, mdiLanguageJavascript, mdiReact, mdiTailwind } from "@mdi/js";
import { RiNextjsLine } from "react-icons/ri";

export default function FrontEnd(){
    return (
        <>
            <h2 className="font-bold text-2xl text-center text-[#1B263B]">Front-end</h2>
            <div className="flex justify-center items-center flex-wrap gap-6">
                <Icon path={mdiLanguageHtml5} size={1.5} className="text-[#5E6472]"/>
                <Icon path={mdiLanguageCss3} size={1.5} className="text-[#5E6472]"/>
                <Icon path={mdiLanguageJavascript} size={1.5} className="text-[#5E6472]"/>
                <Icon path={mdiReact} size={1.5} className="text-[#5E6472]"/>
                <RiNextjsLine size={32} className="text-[#5E6472]" style={{ stroke: "currentColor", strokeWidth: "1px" }}/>
                <Icon path={mdiTailwind} size={1.5} className="text-[#5E6472]"/>
            </div>
        </>
    )
}