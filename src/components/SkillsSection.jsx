import React from "react";

import { skills } from "@/constants/skills";
import Image from "next/image";

const SkillsSection = () => {
    return (
        <div className="text-center max-w-[1440px] h-[100vh] flex flex-col justify-center items-center m-auto">
            <h2 className="text-4xl uppercase font-[600]">Skills</h2>
            <div className="max-w-[75vw] md:max-w-[60vw] grid grid-cols-3 md:grid-cols-6 mx-auto gap-6 mt-8">
                {skills.filter(item=>item.show).map((logo, logoIndex)=>(
                    <div className="w-full h-full flex flex-col justify-center items-center" key={logoIndex}>
                        <Image 
                            src={logo.logo}
                            alt={logo.name}
                            height={40}
                            width={40}
                            className="w-auto h-[40px]"
                        />
                        <div className="mt-2 text-[var(--color-secondary)]">{logo.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SkillsSection;
