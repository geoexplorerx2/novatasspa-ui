import React, { FC, InputHTMLAttributes, useState, useEffect } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { ReactComponent as PhoneIcon } from '../../assets/icons/phone.svg'


interface InfoProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    inputType?: string;
    name?: string;
    onChange?: any;
    value?: any;
    wrapperClassName?: string;
};

const AnimatedTelInput: FC<InfoProps> = (props) => {


    const [phone, setPhone] = useState('');

    const { label, inputType, name, onChange, value, wrapperClassName } = props

    const [inputValue, setInputValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const onInputChange = (e: any) => {

        setInputValue(e);
        onChange && onChange(e)
        setPhone(e);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const flagsDiv = document.querySelector('.react-international-phone-input-container .react-international-phone-country-selector-button') as HTMLElement
    if (flagsDiv) { flagsDiv.style.cssText += 'height: 30px !important; border: none !important; padding-left: 10px !important' };


    return (
        <div className={`${wrapperClassName} relative px-[22px] w-full h-[50px] lg:h-[70px] flex items-center ${isFocused ? ' border-black border-[1px]' : 'border-[#DDDDDD] border'}`}>
            <PhoneIcon />
            <label className={`absolute top-0 left-[53px] transition-all text-xs font-medium  px-2
                        ${isFocused || inputValue ? "translate-y-4 bg-white text-sm z-[3] font-normal" : "translate-y-4 lg:translate-y-[27px] text-[22px] text-[#0D2C3B] text-opacity-50 z-[1]"}
                        `}>
                {label}
            </label>

            <div
                className={`border-none left-[4px] w-full h-full cursor-pointer transition ease-out bg-transparent focus:ring-0 relative z-[11] ${isFocused || inputValue ? "opacity-100" : "opacity-0"}`}
                onFocus={() => onFocus()}
                onBlur={() => onBlur()}
            >

                <PhoneInput

                    defaultCountry="tr"
                    value={phone ?? value ?? inputValue}
                    onChange={(event) => onInputChange(event)}
                    inputClassName={`!border-none w-full h-full cursor-pointer transition ease-out !bg-transparent focus:ring-0 relative !text-lg !font-semibold !mt-[28px]`}
                    className={`border-none w-full h-full cursor-pointer transition ease-out bg-transparent focus:ring-0 relative ${isFocused || inputValue ? 'opacity-100' : 'opacity-0'}`}
                    countrySelectorStyleProps={{ className: 'translate-y-[30px]' }}
                />
            </div>

        </div>
    )
}

export default AnimatedTelInput