import React, { FC, useEffect, useState } from 'react';
import { 
  TRANSLATING_JASMINE_HAMMAM,
  TRANSLATING_TULIP_HAMMAM,
  TRANSLATING_LOTUS_HAMMAM, 
} from '../../data/services'
interface ChooseHamamProps {
  onChange?: Function;
  errors?: any;
  name?: any;
};

const ChooseHamam: FC<ChooseHamamProps> = ({ onChange, errors, name }) => {
  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>(() => {
    let initialSelectedItems: Record<string, boolean> = {}
    HammamsData.forEach(item => {
      initialSelectedItems[item.value] = false
    })
    return initialSelectedItems
  }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetName = e.target.name;
    setSelectedItems(prevState => ({ ...prevState, [targetName]: !prevState[targetName] }))
  };

  useEffect(() => {
    onChange && onChange(selectedItems, 'hammam');
  }, [selectedItems]);

  const errorsKeys = errors && Object.keys(errors)

  return (
    <div className={`w-full col-span-2`}>

      <h3 className={`mb-3 font-medium border-2 border-white w-fit p-2 rounded-lg ${errorsKeys?.includes(name ?? "") ? 'border-2 !border-red-700' : ''} `}>Choose Hammam</h3>
      <div className='grid grid-cols-1 md:grid-cols-3 w-full gap-4 relative'>
        {errors && errors?.[name as string]?.length > 0 && <span className='absolute right-[0px] top-[-50px] bg-red-600 rounded-lg text-white p-2'>{errors[name as string]}</span>}
        {
          HammamsData.map(hammam => {
            const { label, value, id } = hammam
            const isActive = selectedItems[value] == true
            return (
              <div className={`relative border-2 rounded-[10px] px-5 py-4 flex justify-end items-center  ${isActive ? 'border-[#B2A285]' : ''}`} key={id} >
                <label htmlFor={id} className='cursor-pointer absolute pl-6 pr-9 w-full h-full top-0 left-0 flex items-center text-sm font-medium'>{label}</label>
                <input id={id} name={hammam.value} type='checkbox' className='appearance-none focus:ring-0 focus:ring-transparent rounded-full border-2 border-[#CCCCCC] w-[20px] h-[20px] p-1 text-[#B2A285]' onChange={handleChange} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}


const HammamsData = [
  {
    label: TRANSLATING_JASMINE_HAMMAM,
    value: 'JasmineHammam',
    id: '1',
  },
  {
    label: TRANSLATING_TULIP_HAMMAM,
    value: 'TulipHammam',
    id: '2',
  },
  {
    label: TRANSLATING_LOTUS_HAMMAM,
    value: 'LotusHammam',
    id: '3',
  },
  // {
  //   label: 'VIP Hammam',
  //   value: 'VIPHammam',
  //   id: '4',
  // },
  // {
  //   label: 'Luxury Hammam',
  //   value: 'LuxuryHammam',
  //   id: '5',
  // },
];

export default ChooseHamam;