import React, { FC, InputHTMLAttributes, useEffect, useState } from 'react'
interface InfoProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  inputType: string;
  onChange?: any;
  value?: any;
  wrapperClassName?: string;
  Icon?: any;
  focusStateStyles?: string
  errors?: any
  name?: string;
  handleChange?: any;
  labelClassNames?: string
  focusStateLabelClassNames?: string
};

const AnimatedInput: FC<InfoProps> = (props) => {

  const { label, inputType, name, onChange, value, wrapperClassName, Icon, focusStateStyles, errors, handleChange, labelClassNames, focusStateLabelClassNames } = props

  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);


  const onInputChange = (e: any) => {
    setInputValue(e.target.value);
    onChange && onChange(e)
    handleChange && handleChange(e)
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  // console.log('from input::', value)
  // errors.map((e: any) => console.log(e))
  const errorsKeys = errors && Object.keys(errors)
  // console.log('errorsKeys', errors

  return (
    <div className={`${wrapperClassName} ${name && errorsKeys?.includes(name ?? "") ? `border-2 border-red-600` : ''} relative w-full h-[80px] lg:h-[70px] flex items-center  px-[22px] ${isFocused ? `${focusStateStyles} border-black border-[1px]` : 'border-[#DDDDDD] border'}`}>
      <div className={` ${inputType === 'textArea' ? 'h-full pt-7' : ''}`}>
        {Icon && Icon}
      </div>
      {/* || value[name as string] */}
      <label className={`${labelClassNames} absolute top-0 transition-all text-xs font-medium  px-2
                        ${isFocused || inputValue  ? `${focusStateLabelClassNames} translate-y-4  text-sm z-[3] font-normal` : "translate-y-4 lg:translate-y-[27px] text-[22px] text-[#0D2C3B] text-opacity-50 z-[1]"}
                        ${Icon ? 'left-[53px]' : 'left-3'}
                        `}>
        {label}
      </label>

      
      {errors && errors?.[name as string]?.length > 0 && <span className='absolute right-[5px] top-[-20px] bg-red-600 rounded-lg text-white p-2 z-10'>{errors && errors[name as string]}</span>}

      {
        inputType === 'textArea'
          ?
          <textarea
            // value={value[name as string] ?? inputValue}
            onChange={onInputChange}
            onFocus={() => onFocus()}
            onBlur={() => onBlur()}
            name={name}
            className={`border-none w-full h-full cursor-pointer transition ease-out bg-transparent focus:ring-0 relative z-[2] pt-7 text-lg font-semibold ${Icon ? 'px-4' : 'pl-0'}`}
            cols={30}
            rows={10}

          />
          :
          <input
            // value={value[name as string] ?? inputValue}
            onChange={onInputChange}
            onFocus={() => onFocus()}
            onBlur={() => onBlur()}
            type={inputType}
            name={name}
            className={`border-none w-full h-full cursor-pointer transition ease-out bg-transparent focus:ring-0 relative z-[2] pt-7 text-lg font-semibold ${Icon ? 'px-4' : 'pl-0'}`}
          />
      }
    </div>
  )
}

export default AnimatedInput