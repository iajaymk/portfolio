import { useState } from "react";

import { themes } from "@/constants/themes";
import { Palette } from "lucide-react";

const ThemeSelector = ({theme, setTheme}) => {
    const [viewThemes, setViewThemes] = useState(false);
    const visibileThemes = themes.filter(item=>item.name!==theme);

    const handleClick = (themeName) => {
        setTheme(themeName);
        setViewThemes(false);
    }

    return (
        <>
        {viewThemes && (
            <div className="theme-options">
            <button
              className="m-2  h-[32px] w-[32px] rounded-full cursor-pointer fixed bottom-[21px] right-[80px]"
              style={{backgroundColor:visibileThemes[0].primaryColor}}
              onClick={() => handleClick(visibileThemes[0].name)}
            >
            </button>
            <button
              className="m-2  h-[32px] w-[32px] rounded-full cursor-pointer fixed bottom-[56px] right-[75px]"
              style={{backgroundColor:visibileThemes[1].primaryColor}}
              onClick={() => handleClick(visibileThemes[1].name)}
            >
            </button>
            <button
              className="m-2  h-[32px] w-[32px] rounded-full cursor-pointer fixed bottom-[82px] right-[51px]"
              style={{backgroundColor:visibileThemes[2].primaryColor}}
              onClick={() => handleClick(visibileThemes[2].name)}
            >
            </button>
            <button
              className="m-2  h-[32px] w-[32px] rounded-full cursor-pointer fixed bottom-[90px] right-[16px]"
              style={{backgroundColor:visibileThemes[3].primaryColor}}
              onClick={() => handleClick(visibileThemes[3].name)}
            >
            </button>
            </div>
        )}
        <div className="z-[2147483647] fixed right-[20px] bottom-[30px] cursor-pointer bg-[var(--color-secondary)] p-4 rounded-full" 
            onClick={()=>setViewThemes(!viewThemes)}
        >
            <Palette strokeWidth={1.75} />
        </div>
        </>
    )
}

export default ThemeSelector;