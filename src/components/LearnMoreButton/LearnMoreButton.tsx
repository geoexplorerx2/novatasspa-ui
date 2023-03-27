import React, { FC } from 'react';
import arrow from '../../assets/icons/right-arrow.png';

interface LearnMoreButtonProps {
    color?: string;
}

const LearnMoreButton:FC<LearnMoreButtonProps> = (props) => {

    const {color} = props;
    console.log(props)

    return (
        <button className={`border-2 border-[${color}] mt-[30px]`}>
            <div className={`py-[16px] px-[31px] text-[${color}] text-[22px]`}>
                <span className={`font-gotu !text-[${color}]`}>Learn More</span>
                <img src={arrow} alt='' className='!inline !h-[25px] ml-[26.75px]' />
            </div>
        </button>
    )
}

export default LearnMoreButton