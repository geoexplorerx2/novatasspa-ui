import React, { useState, useEffect, FC } from 'react'
import { ReactComponent as BaliMassageIcon } from '../../assets/icons/bali-massage-icon.svg'
import { ReactComponent as BlendThaiMassageIcon } from '../../assets/icons/blend-thai-massage.svg'
import { ReactComponent as ThaiMassageIcon } from '../../assets/icons/thai-massage.svg'
import { ReactComponent as HotStoneMassageIcon } from '../../assets/icons/hot-stone-massage.svg'
import { ReactComponent as CatmaSignatureMassageIcon } from '../../assets/icons/catma-signature-massage.svg'
import { ReactComponent as AromatherapyMassageIcon } from '../../assets/icons/aromatherapy-massage.svg'
import { ReactComponent as AntiStressMassageIcon } from '../../assets/icons/anti-stress-massage.svg'
import { ReactComponent as ReflexologyMassageIcon } from '../../assets/icons/reflexology-icon.svg'


interface ChooseMassageProps {
  onChange?: Function;
  errors?: any;
  name?: any;
};

const ChooseMassage: FC<ChooseMassageProps> = ({ onChange, errors, name }) => {

  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>(() => {
    let initialSelectedItems: Record<string, boolean> = {}

    // 
    MassageTypesData.forEach(item => {
      initialSelectedItems[item.value] = false
    });

    return initialSelectedItems
  }
  );

  const errorsKeys = errors && Object.keys(errors)

  const handleChange = (targetId: string) => {
    setSelectedItems(prevState => ({ ...prevState, [targetId]: !prevState[targetId] }))
  };

  useEffect(() => {
    console.log('the selectedItems: ', selectedItems)
    onChange && onChange(selectedItems, 'massages');
  }, [selectedItems]);

  return (
    <div className={`w-full col-span-2` }>
      <h3 className={`mb-3 font-medium border-2 border-white w-fit p-2 rounded-lg ${errorsKeys?.includes(name ?? "") ? ' border-2 !border-red-700' : ''}`}>Massage</h3>
      <div className='grid grid-cols-4  min-[1600px]:grid-cols-6 gap-[30px]'>
        {
          MassageTypesData.map((massageType, index) => {
            const { label, value, Icon, id } = massageType
            const isActive = selectedItems[value] === true
            return (
              <div className={`relative flex flex-col cursor-pointer ${index === 6 ? 'col-start-3' : ''} `} key={id} onClick={() => { handleChange(value) }}>
                <div className={`h-[90px] mb-[10px] border-2  bg-[#F7F7F7] p-6 rounded-[10px] group flex justify-center items-center ${isActive ? 'border-2 border-[#B2A285]' : ''}`}><Icon className='' /></div>
                <span className='font-sm text-center'>{label}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
};


const MassageTypesData = [
  {
    label: 'Bali Message',
    value: 'bali-massage',
    Icon: BaliMassageIcon,
    id: '1'
  },
  {
    label: 'Blend Thai Massage',
    value: 'blend-thai-massage',
    Icon: BlendThaiMassageIcon,
    id: '2'
  },
  {
    label: 'Thai Massage',
    value: 'thai-massage',
    Icon: ThaiMassageIcon,
    id: '3'
  },
  {
    label: 'Hot Stone Massage',
    value: 'hot-stone-massage',
    Icon: HotStoneMassageIcon,
    id: '4'
  },
  {
    label: 'Catma Signature Massage',
    value: 'catma-signature-massage',
    Icon: CatmaSignatureMassageIcon,
    id: '5'
  },
  {
    label: 'Aromatherapy Massage',
    value: 'aromatherapy-massage',
    Icon: AromatherapyMassageIcon,
    id: '6'
  },
  {
    label: 'Anti-Stress Massage',
    value: 'anti-stress-massage',
    Icon: AntiStressMassageIcon,
    id: '7'
  },
  {
    label: 'Reflexology',
    value: 'reflexology',
    Icon: ReflexologyMassageIcon,
    id: '8'
  },
]


export default ChooseMassage