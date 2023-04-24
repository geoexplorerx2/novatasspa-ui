import { createStyles } from '@mantine/core';
import { DateInputProps, DateValue } from '@mantine/dates'
import React, { FC, useState } from 'react'
import { DateInput } from '../../lib'
import CalendarIcon from '../../assets/icons/calendar.svg'
import dayjs from 'dayjs';

interface AnimatedDateInputPropsType {
    name?: string
    value: Date | undefined,
    label?: string,
    setValue: React.Dispatch<React.SetStateAction<{ 
        nameSurname: null;
        email: null;
        phoneNo: null;
        date: any;
    }>>,
    handleChange?: any;
    errors?: any;
    wrapperClassNames?: string
};

const useStyles = createStyles(theme => ({
    input: {
        height: '100%',
        backgroundColor: 'transparent',
        padding: '28px 24px 0 24px',
        fontWeight: 600,
        fontSize: '18px',
        border: 'none !important',
    },
    wrapper: {
        height: '100%'
    },
    root: {
        height: '100%'
    }
}))



const AnimatedDateInput: FC<AnimatedDateInputPropsType> = (props) => {
    const { value, setValue, name = 'date', label, handleChange, errors, wrapperClassNames } = props
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState();

    const handleDateChange = (date: Date) => {
        console.log('this is the date: ', date);
        // setValue(prevState => ({ ...prevState, date }));
        handleChange && handleChange(date, 'date');
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const { classes } = useStyles();

    const errorsKeys = errors && Object.keys(errors)

    return (
        <div className={`${wrapperClassNames} relative w-full h-[80px] lg:h-[70px] flex items-center  pl-[22px] transition-all hover:bg-white rounded-[10px] ${errorsKeys?.includes(name ?? "") ? ' border-2 border-red-700' : ''} ${isFocused ? ' border-black border-[1px] bg-white' : 'border-[#DDDDDD] border bg-[#F7F7F7]'}`}>
            <div className={``}>
                <img src={CalendarIcon} />
            </div>
            <label className={`absolute top-0 transition-all text-xs font-medium  px-2 left-[53px]
                        ${isFocused  ? "translate-y-4 text-sm z-[3] font-normal" : "translate-y-4 lg:translate-y-[27px] text-[22px] text-[#0D2C3B] text-opacity-50"}`}>
                {label}
            </label>

            {errors && errors?.[name as string]?.length > 0 && <span className='absolute right-[5px] top-[-20px] bg-red-600 rounded-lg text-white p-2 z-10'>{errors && errors[name as string]}</span>}

            <DateInput
                // value={value ?? inputValue}
                onChange={handleDateChange}
                name={name}
                classNames={{
                    input: classes.input,
                    wrapper: classes.wrapper,
                    root: classes.root,

                }}
                minDate={dayjs(new Date()).startOf('month').add(new Date().getDate() - 1, 'days').toDate()}
                onFocus={() => onFocus()}
                onBlur={() => onBlur()}
                inputMode='none'
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