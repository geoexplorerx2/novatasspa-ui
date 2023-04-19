import { FC } from 'react';
import { LETTERS_TAPE } from '../../data/letterstape';

interface LetterTapeProps {
    wrapperClassName?: string;
}

const LetterTape: FC<LetterTapeProps> = (props) => {
    const { wrapperClassName } = props;


    return (
        <div className='flex overflow-hidden' >
            <div className={`${wrapperClassName}`}>
                {LETTERS_TAPE.map((letter: any) => (
                    <img src={letter.letter} alt='' className={letter.className} />
                ))}
            </div>
        </div>
    )
}

export default LetterTape;