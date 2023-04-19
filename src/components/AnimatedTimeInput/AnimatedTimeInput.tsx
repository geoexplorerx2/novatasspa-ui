import React, { useState, FC } from 'react'
import { ReactComponent as Clock } from '../../assets/icons/clock.svg'



interface AnimatedTimeInputProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, name?: string) => void
    label?: string,
    value?: string,
    errors?: any;
    name?: any;
    wrapperClassNames?: string;
};

const AnimatedTimeInput: FC<AnimatedTimeInputProps> = (props) => {
    const { handleChange, label = 'Time', value, errors, name = 'time', wrapperClassNames } = props
    const [selectedOption, setSelectedOption] = useState('')
    const [isFocused, setIsFocused] = useState(false);

    const handleSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {

        const target = e.target
        const value: any = e.target.value

        setSelectedOption(value)
        handleChange && handleChange(value, 'time')
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const errorsKeys = errors && Object.keys(errors)


    return (
        <div className={`${wrapperClassNames} relative w-full h-[80px] lg:h-[70px] flex items-center  pl-[22px] transition-all hover:bg-white rounded-[10px] ${errorsKeys?.includes(name ?? "") ? ' border-2 border-red-700' : ''} ${isFocused ? ' border-black border-[1px] bg-white' : 'border-[#DDDDDD] border bg-[#F7F7F7]'}`}>
            <div className={``}>
                <Clock />
            </div>
            <label className={`absolute top-0 transition-all text-xs font-medium  px-2 left-[53px]
                        ${isFocused || selectedOption ? "translate-y-4 text-sm z-[3] font-normal" : "translate-y-4 lg:translate-y-[27px] text-[22px] text-[#0D2C3B] text-opacity-50 z-[1]"}'}
                        `}>
                {label}
            </label>
            {errors && errors?.[name as string]?.length > 0 && <span className='absolute right-[5px] top-[-20px] bg-red-600 rounded-lg text-white p-2'>{errors && errors[name as string]}</span>}

            {
                <select
                    name="time"
                    id="time-select"
                    onChange={handleSelection}
                    onFocus={() => onFocus()}
                    onBlur={() => onBlur()}
                    className={`border-none w-full h-full cursor-pointer transition ease-out bg-transparent focus:ring-0 relative z-[2] pt-7 text-lg font-semibold px-5`}
                    value={value ?? selectedOption}


                >
                    {
                        options.map(option => {
                            const { label, value, id } = option
                            return (
                                <option value={value}>{label}</option>
                            )
                        })
                    }
                </select>

            }
        </div>
    )
}


const options = [
    { label: '', value: undefined, id: 1 },
    { label: '08:00 - 08:30', value: '08:00', id: 1.1 },
    { label: '08:30 - 09:00', value: '08:30', id: 2 },
    { label: '09:00 - 09:30', value: '09:00', id: 3 },
    { label: '09:30 - 10:00', value: '09:30', id: 4 },
    { label: '10:00 - 10:30', value: '10:00', id: 5 },
    { label: '10:30 - 11:00', value: '10:30', id: 6 },
    { label: '11:00 - 11:30', value: '11:00', id: 7 },
    { label: '11:30 - 12:00', value: '11:30', id: 8 },
    { label: '12:00 - 12:30', value: '12:00', id: 9 },
    { label: '12:30 - 01:00', value: '12:30', id: 10 },
    { label: '01:00 - 01:30', value: '01:00', id: 11 },
    { label: '01:30 - 02:00', value: '01:30', id: 12 },
    { label: '02:00 - 02:30', value: '02:00', id: 13 },
    { label: '02:30 - 03:00', value: '02:30', id: 14 },
    { label: '03:00 - 03:30', value: '03:00', id: 15 },
    { label: '03:30 - 04:00', value: '03:30', id: 16 },
    { label: '04:00 - 04:30', value: '04:00', id: 17 },
    { label: '04:30 - 05:00', value: '04:30', id: 18 },
    { label: '05:00 - 05:30', value: '05:00', id: 19 },
    { label: '05:30 - 06:00', value: '05:30', id: 20 },
    { label: '06:00 - 06:30', value: '06:00', id: 21 },
    { label: '06:30 - 07:00', value: '06:30', id: 22 },
    { label: '07:00 - 07:30', value: '07:00', id: 23 },
    { label: '07:30 - 08:00', value: '07:30', id: 24 }
]




export default AnimatedTimeInput