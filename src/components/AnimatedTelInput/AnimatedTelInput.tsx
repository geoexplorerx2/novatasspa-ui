import React, { FC, InputHTMLAttributes, useState, useEffect, useRef } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { ReactComponent as PhoneIcon } from '../../assets/icons/phone-icon.svg'
import { error } from 'console';


interface InfoProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    inputType?: string;
    name?: string;
    onChange?: any;
    value?: any;
    wrapperClassName?: string;
    focusStateStyles?: string;
    errors?: any;
};

const AnimatedTelInput: FC<InfoProps> = (props) => {


    const phoneRef = useRef(null);
    // phoneInput?.setAttribute("ref", `${phoneRef}`)
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('tr')
    const [updatephoneui, setUpdatephoneui] = useState(Math.floor(Math.random()*100))
    console.log('updatephoneui',updatephoneui)

    useEffect(() => {
        getLocation();
        setUpdatephoneui(Math.floor(Math.random()*100))
        const phoneInput = document.getElementsByClassName('react-international-phone-input')?.[0] as HTMLElement;
        phoneInput?.setAttribute("ref", `${phoneRef}`)
        // @ts-ignore
        phoneRef?.current?.blur();

    }, [country])

    const { label, inputType, name, onChange, value, wrapperClassName, focusStateStyles, errors } = props

    const [inputValue, setInputValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const onInputChange = (e: any) => {

        setInputValue(e);
        onChange && onChange(e, 'telephone');
        setPhone(e);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const errorsKeys = errors && Object.keys(errors)
    console.log('errorsKeys', errorsKeys)

    const flagsDiv = document.querySelector('.react-international-phone-input-container .react-international-phone-country-selector-button') as HTMLElement
    if (flagsDiv) { flagsDiv.style.cssText += 'height: 30px !important; border: none !important; padding-left: 10px !important' };

    // geolocation: 
    async function getLocation() {
        const response = await fetch("https://api.ipgeolocation.io/ipgeo?apiKey=bddf8311bbe94893b126f5a5209020f6");
        const jsonData = await response.json();
        // console.log('jsonData',jsonData.country_code2.toLowerCase());
        setCountry(jsonData.country_code2.toLowerCase());
        return jsonData.country_code2.toLowerCase()
    }


    return (
        <div className={`${wrapperClassName} ${errorsKeys?.includes('phone') ? ' border-2 border-red-700' : ''} relative px-[22px] w-full h-[80px] lg:h-[70px] flex items-center ${isFocused ? `${focusStateStyles} border-black border-[1px]` : 'border-[#DDDDDD] border'}`}>
            <PhoneIcon />
            <label className={`absolute top-0 left-[53px] transition-all text-xs font-medium  px-2
                        ${isFocused || inputValue ? "translate-y-4 text-sm z-[3] font-normal" : "translate-y-4 lg:translate-y-[27px] text-[22px] text-[#0D2C3B] text-opacity-50 z-[1]"}
                        `}>
                {label}
            </label>

            <div
                className={`left-[4px] w-full h-full cursor-pointer transition ease-out bg-transparent focus:ring-0 relative z-[11] ${isFocused || inputValue ? "opacity-100" : "opacity-0"}`}
                onFocus={() => onFocus()}
                onBlur={() => onBlur()}
            >

                {errors && errors?.[name as string]?.length > 0 && <span className='absolute right-[-13px] top-[-20px] bg-red-600 rounded-lg text-white p-2'>{errors && errors[name as string]}</span>}


                { country && <PhoneInput
                    key={updatephoneui}
                    value={phone ?? value ?? inputValue}
                    onChange={(event) => onInputChange(event)}
                    //@ts-ignore
                    defaultCountry={country as string}
                    inputClassName={`!border-none w-full h-full cursor-pointer transition ease-out !bg-transparent focus:ring-0 relative !text-lg !font-semibold !mt-[28px]`}
                    className={`border-none w-full h-full cursor-pointer transition ease-out bg-transparent focus:ring-0 relative ${isFocused || inputValue ? 'opacity-100' : 'opacity-0'}`}
                    countrySelectorStyleProps={{ className: 'translate-y-[30px]' }}
                />}
            </div>

        </div>
    )
}

export default AnimatedTelInput