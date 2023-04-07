import React from 'react'

const ChooseHamam = () => {
  return (
    <div className='w-full col-span-2'>
      <h3 className='mb-3 font-medium'>Choose Hammam</h3>
      <div className='grid grid-cols-3 w-full gap-4'>
        {
          HammamsData.map(hammam => {
            const { label, value, id } = hammam
            return (
              <div className='border-2 rounded-[10px] border-[#CCCCCC] px-5 py-4 flex justify-between items-center' key={id} >
                <label htmlFor={id} className='text-sm font-medium'>{ label }</label>
                <input id={id} type='checkbox' className='appearance-none focus:ring-0 focus:ring-transparent rounded-full border-2 border-[#CCCCCC] w-[20px] h-[20px] p-1' />
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
]

export default ChooseHamam