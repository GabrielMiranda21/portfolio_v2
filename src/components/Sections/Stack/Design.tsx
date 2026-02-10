import Icon from "@mdi/react";
import { mdiVectorPolyline, mdiPaletteOutline } from "@mdi/js";
import { SiFigma } from 'react-icons/si'

export default function Design(){
    return (
        <>
            <h2 className="font-bold text-2xl text-center text-[#1B263B]">Design</h2>
            <div className="flex justify-center items-center flex-wrap gap-6">
                <Icon path={mdiVectorPolyline} size={1.5} className="text-[#5E6472]"/>
                <Icon path={mdiPaletteOutline} size={1.5} className="text-[#5E6472]"/>
                <SiFigma size={32} className="text-[#5E6472]" style={{ stroke: "currentColor", strokeWidth: "1px" }}/>
            </div>
        </>
    )
}