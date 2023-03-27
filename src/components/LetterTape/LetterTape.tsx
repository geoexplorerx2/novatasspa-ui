import { FC } from 'react';
import t_letter from '../../assets/icons/T.svg';
import a_letter from '../../assets/icons/A.svg';
import s_letter from '../../assets/icons/S.svg';
import n_letter from '../../assets/icons/N.svg';
import o_letter from '../../assets/icons/O.svg';
import v_letter from '../../assets/icons/V.svg';

interface LetterTapeProps {
    wrapperClassName?: string;
}

const LetterTape: FC<LetterTapeProps> = (props) => {
    const {wrapperClassName} = props;

    return (
        <div className={`${wrapperClassName}`}>
            <img src={t_letter} alt='' className='mr-[32.7px] fill-[#666B45]' />
            <img src={a_letter} alt='' className='mr-[32.7px]' />
            <img src={s_letter} alt='' className='mr-[32.7px]' />
            <img src={n_letter} alt='' className='mr-[32.7px]' />
            <img src={o_letter} alt='' className='mr-[32.7px]' />
            <img src={v_letter} alt='' className='mr-[32.7px]' />
            <img src={a_letter} alt='' className='mr-[32.7px]' />

            <img src={t_letter} alt='' className='mr-[32.7px]' />
            <img src={a_letter} alt='' className='mr-[46.76px]' />
            <img src={s_letter} alt='' className='mr-[50px]' />
            <img src={n_letter} alt='' className='mr-[62.35px]' />
            <img src={o_letter} alt='' className='mr-[44.73px]' />
            <img src={v_letter} alt='' className='mr-[32.7px]' />
            <img src={a_letter} alt='' className='mr-[32.7px]' />
        </div>
    )
}

export default LetterTape