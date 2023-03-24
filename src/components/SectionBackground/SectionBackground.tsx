import React, { FC, ReactNode } from 'react'

interface SectionBackgroundType {
    children: ReactNode,
    wrapperClassNames?: string,
    backgroundDivClassNames?: string,
}


const SectionBackground: FC<SectionBackgroundType> = (props) => {
    const { children, wrapperClassNames, backgroundDivClassNames } = props
    return (
        <div className={`${wrapperClassNames} relative flex justify-center border border-orange-400` }>
            {children}
            <div className={`${backgroundDivClassNames} absolute z-[-1] top-0 left-0 bg-[#9FAF91] h-full w-[300vw]  -rotate-[1deg] flex justify-center`}>
            </div>
        </div>
    )
}



export default SectionBackground