import React from 'react'
import NoseMassage from '../../assets/images/noseMassaging.png'


const InstagramImages = () => {
  return (
    <div className='bg-[#0D0D0D]'>
        <div className='container py-20 '>
            <h2 className='text-white text-4xl font-gotu text-center mb-20'>Instagram</h2>
            <div className='flex justify-between flex-wrap mb-20'>
                {
                    data.map(instagramItem => {
                        const { img, label, id } = instagramItem
                        return (
                            <img src={img} alt={label} key={id}/>
                        )
                    })
                }

            </div>
        </div>
    </div>
  )
}

const data = [
    {
        label: '',
        img: NoseMassage,
        id: '1'
    },
    {
        label: '',
        img: NoseMassage,
        id: '2'
    },
    {
        label: '',
        img: NoseMassage,
        id: '3'
    },
    {
        label: '',
        img: NoseMassage,
        id: '4'
    },
]

export default InstagramImages