import React, { FC, useEffect, useState } from 'react';

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
      <div className='grid grid-cols-3 w-full gap-4'>
        {
          HammamsData.map(hammam => {
            const { label, value, id } = hammam
            const isActive = selectedItems[value] == true
            return (
              <div className={`relative border-2 rounded-[10px] px-5 py-4 flex justify-end items-center  ${isActive ? 'border-[#B2A285]' : ''}`} key={id} >
                <label htmlFor={id} className='absolute pl-6 pr-9 w-full h-full top-0 left-0 flex items-center text-sm font-medium'>{label}</label>
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
    label: 'Pasha Hammam',
    value: 'PashaHammam',
    id: '1',
  },
  {
    label: 'Shahrazad Hammam',
    value: 'ShahrazadHammam',
    id: '2',
  },
  {
    label: 'Sultan Hammam',
    value: 'SultanHammam',
    id: '3',
  },
  {
    label: 'VIP Hammam',
    value: 'VIPHammam',
    id: '4',
  },
  {
    label: 'Luxury Hammam',
    value: 'LuxuryHammam',
    id: '5',
  },
];

export default ChooseHamam;