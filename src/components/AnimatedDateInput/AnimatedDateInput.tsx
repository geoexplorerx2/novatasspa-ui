import { createStyles } from '@mantine/core';
import { DateInputProps, DateValue } from '@mantine/dates'
import React, { FC, useState } from 'react'
import { DateInput } from '../../lib'
import CalendarIcon from '../../assets/icons/calendar.svg'


interface AnimatedDateInputPropsType {
    name?: string
    value: Date | undefined,
    label?: string,
    setValue: React.Dispatch<React.SetStateAction<{
        nameSurname: null;
        email: null;
        phoneNo: null;
        date: any ;
    }>>,

}





const useStyles = createStyles(theme => ({
    input: {
        height: '100%',
        backgroundColor: 'transparent',
        padding: '28px 24px 0 24px',
        fontWeight: 600,
        fontSize: '18px',
        border: 'none !important'
    },
    wrapper: {
        height: '100%'
    },
    root: {
        height: '100%'
    }
}))



const AnimatedDateInput: FC<AnimatedDateInputPropsType> = (props) => {
    const { value, setValue, name = 'date', label } = props
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState();

    const handleDateChange = (date: Date) => {
        console.log('this is the date: ', date)
        setValue(prevState => ({ ...prevState, date }))
    }
 
  
  
    const onFocus = () => {
      setIsFocused(true);
    };
  
    const onBlur = () => {
      setIsFocused(false);
    };
  
  


    const { classes } = useStyles()
    return (
        <div className={`relative w-full h-[50px] lg:h-[70px] flex items-center  pl-[22px] ${isFocused ? ' border-black border-[1px]' : 'border-[#DDDDDD] border'}`}>
        <div className={``}>
            <img src={CalendarIcon} />
        </div>
      <label className={`absolute top-0 transition-all text-xs font-medium  px-2 left-[53px]
                        ${isFocused || value ? "translate-y-4 text-sm z-[3] font-normal" : "translate-y-4 lg:translate-y-[27px] text-[22px] text-[#0D2C3B] text-opacity-50"}`}>
        {label}
      </label>
      
            <DateInput
                        value={value ?? inputValue}
                        onChange={handleDateChange}
                        name={name}
                        classNames={{
                            input: classes.input,
                            wrapper: classes.wrapper,
                            root: classes.root,

                        }}
                        onFocus={() => onFocus()}
                        onBlur={() => onBlur()}
                    />
          
      
    </div>
        
        // <div>
        //     <DateInput
        //         value={value}
        //         onChange={handleDateChange}
        //         placeholder="Date input"
        //         name="date"
        //         classNames={{
        //             input: classes.input,
        //             wrapper: classes.wrapper,
        //             root: classes.root,

        //         }}
        //     />
        // </div>
    )
}

export default AnimatedDateInput