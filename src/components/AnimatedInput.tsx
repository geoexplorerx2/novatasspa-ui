import React, { FC, InputHTMLAttributes, useEffect, useState } from 'react'
interface InfoProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  inputType: string;
  name?: string;
  onChange?: any;
  value?: any;
  wrapperClassName?: string;
  Icon?: any;
  focusStateStyles?: string
};

const AnimatedInput: FC<InfoProps> = (props) => {

  const { label, inputType, name, onChange, value, wrapperClassName, Icon, focusStateStyles } = props

  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);


  const onInputChange = (e: any) => {
    setInputValue(e.target.value);
    onChange && onChange(e)
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };



  return (
    <div className={`${wrapperClassName} relative w-full h-[50px] lg:h-[70px] flex items-center  px-[22px] ${isFocused ? `${focusStateStyles} border-black border-[1px]` : 'border-[#DDDDDD] border'}`}>
        <div className={` ${inputType === 'textArea' ? 'h-full pt-7' : ''}`}>
            {Icon && Icon}
        </div>
      <label className={`absolute top-0 transition-all text-xs font-medium  px-2
                        ${isFocused || value ? "translate-y-4 text-sm z-[3] font-normal" : "translate-y-4 lg:translate-y-[27px] text-[22px] text-[#0D2C3B] text-opacity-50 z-[1]"}
                        ${Icon ? 'left-[53px]' : 'left-3'}
                        `}>
        {label}
      </label>
      {
        inputType === 'textArea'
          ?
          <textarea
            value={value ?? inputValue}
            onChange={(event) => onInputChange(event)}
            onFocus={() => onFocus()}
            onBlur={() => onBlur()}
            name={name}
            className={`border-none w-full h-full cursor-pointer transition ease-out bg-transparent focus:ring-0 relative z-[2] pt-7 text-lg font-semibold ${Icon ? 'px-4' : 'pl-0'}`}
            cols={30}
            rows={10}

          />
          :
          <input
            value={value ?? inputValue}
            onChange={(event) => onInputChange(event)}
            onFocus={() => onFocus()}
            onBlur={() => onBlur()}
            type={inputType}
            name={name}
            className={`border-none w-full h-full cursor-pointer transition ease-out bg-transparent focus:ring-0 relative z-[2] pt-7 text-lg font-semibold ${Icon ? 'px-4' : 'pl-0'}`
            }
            
          />
      }
    </div>
  )
}

export default AnimatedInput