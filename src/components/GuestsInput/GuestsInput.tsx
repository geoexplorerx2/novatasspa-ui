import React, { FC, useEffect, useState, useRef } from 'react'
import { ReactComponent as PeopleAvatar } from '../../assets/icons/people-avatar.svg'
import { GuestsType } from '../../types'


interface GuestsInputPros {
    handleChange: (guests: GuestsType) => void
    label?: string,
    value?: GuestsType
}




const GuestsInput: FC<GuestsInputPros> = (props) => {
    const { label, value, handleChange } = props
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)
    const [guestsCount, setGuestsCount] = useState(
        {
            maleCount: 1,
            femaleCount: 1
        }
    )

    const wrapperRef = useRef<HTMLDivElement>(null)

 


    const handleSelection = (e: GuestsType) => {



        // setSelectedOption(value)
        handleChange && handleChange(e)
    }


    const handleClickOutsideInput = (event: MouseEvent) => {
        if (!wrapperRef.current) return;

        // click inside
        if (wrapperRef.current.contains(event.target as Node)) {

            return;
        }

        // click outside
        setIsPopoverOpen(false);
    };

    const handleMaleCountChange = (type: 'increment' | 'decrement') => {
        if(type === 'increment'){
            setGuestsCount(prevState => ({...prevState, maleCount: prevState.maleCount++ }))
        } else if (type === 'decrement'){
            if(guestsCount.maleCount <= 0 ) return
            setGuestsCount(prevState => ({...prevState, maleCount: prevState.maleCount-- }))
        }
        
    }
   
    const handleFemaleCountChange = (type: 'increment' | 'decrement') => {
        if(type === 'increment'){
            setGuestsCount(prevState => ({...prevState, femaleCount: prevState.femaleCount++ }))
        } else if (type === 'decrement'){
            if(guestsCount.femaleCount <= 0) return
            setGuestsCount(prevState => ({...prevState, femaleCount: prevState.femaleCount-- }))
        }
        
    }

    useEffect(() => {
        if (handleClickOutsideInput) {
            document.removeEventListener("click", handleClickOutsideInput);
        }
        document.addEventListener("click", handleClickOutsideInput);
        return () => {
            document.removeEventListener("click", handleClickOutsideInput);
        };
    }, []);


    useEffect(() => {
        console.log('guests Count', guestsCount)
    } ,[guestsCount])
    const totalGuestsCount = guestsCount.femaleCount + guestsCount.maleCount
    return (
        <div className={`relative w-full h-[50px] lg:h-[70px] flex items-center pl-[22px] rounded-[10px] border-[#DDDDDD] border hover:bg-white transition-all ${isPopoverOpen ? "bg-white" : "bg-[#f7f7f7]" }`}
            onClick={() => { setIsPopoverOpen(true) }}
            ref={wrapperRef}
        >
            <div className={``}>
                <PeopleAvatar />
            </div>
            <label className={`absolute top-0 transition-all font-medium  px-2 left-[53px] translate-y-4 text-sm z-[3] font-normal'}
                `}>
                {label}
            </label>
            <div className='pl-4 pt-5 font-semibold text-lg'>
                <span className='mr-2'>
                    {totalGuestsCount} 
                </span>
                <span>
                    {totalGuestsCount > 1 ? 'People' : 'Person'}
                </span>
             </div>

            <div className={`max-w-full absolute top-[70px] left-0 transition-all duration-500 z-20 ${isPopoverOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className='grid grid-cols-2 gap-4 h-full border rounded-[10px] bg-white p-4 shadow-[0_30px_30px_-30px_rgba(0,0,0,0.2)]'>
                    <div className='grid grid-cols-2 items-center gap-4'>
                        <span>Male</span>
                        <div className='flex flex-col justify-center items-center border gap-4'>
                            <button className='bg-[#B2A285] w-full h-7 text-white' onClick={() => {handleMaleCountChange('increment')}}>+</button>
                            <span className=''>{guestsCount.maleCount}</span>
                            <button className='bg-[#B2A285] w-full h-7 text-white' onClick={() => {handleMaleCountChange('decrement')}}>-</button>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 items-center gap-4'>
                        <span>Female</span>
                        <div className='flex flex-col justify-center items-center border gap-4'>
                        <button className='bg-[#B2A285] w-full h-7 text-white' onClick={() => {handleFemaleCountChange('increment')}}>+</button>
                            <span>{guestsCount.femaleCount}</span>
                            <button className='bg-[#B2A285] w-full h-7 text-white' onClick={() => {handleFemaleCountChange('decrement')}}>-</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default GuestsInput