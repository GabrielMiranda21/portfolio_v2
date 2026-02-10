import Icon from "@mdi/react";
import { mdiNodejs, mdiApi, mdiDatabaseOutline } from "@mdi/js";

export default function BackEnd(){
    return (
        <>
            <h2 className="font-bold text-2xl text-center text-[#1B263B]">Back-end</h2>
            <div className="flex justify-center items-center flex-wrap gap-6">
                <Icon path={mdiNodejs} size={1.5} className="text-[#5E6472]"/>
                <Icon path={mdiApi} size={1.5} className="text-[#5E6472]"/>
                <Icon path={mdiDatabaseOutline} size={1.5} className="text-[#5E6472]"/>
            </div>
        </>
    )
}