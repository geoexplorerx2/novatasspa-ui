import React, { FC, ReactNode } from 'react'

interface SectionBackgroundType {
    children: ReactNode,
    wrapperClassNames?: string,
    backgroundDivClassNames?: string,
}


const SectionBackground: FC<SectionBackgroundType> = (props) => {
    const { children, wrapperClassNames, backgroundDivClassNames } = props
    return (
        <div className={`${wrapperClassNames} relative` }>
            {children}
            <div className={`${backgroundDivClassNames} absolute z-[-1] top-4 left-0 bg-[#9FAF91] h-[calc(100%_-_32px)] w-full  flex justify-center -skew-y-1`}>
            </div>
        </div>
    )
}



export default SectionBackground