import Icon from "@mdi/react";
import { mdiGithub, mdiGit, mdiApplicationCogOutline } from "@mdi/js";

export default function Ferraments(){
    return (
        <>
            <h2 className="font-bold text-2xl text-center text-[#1B263B]">Ferramentas</h2>
            <div className="flex justify-center items-center flex-wrap gap-6">
                <Icon path={mdiGithub} size={1.5} className="text-[#5E6472]"/>
                <Icon path={mdiGit} size={1.5} className="text-[#5E6472]"/>
                <Icon path={mdiApplicationCogOutline} size={1.5} className="text-[#5E6472]"/>
            </div>
        </>
    )
}