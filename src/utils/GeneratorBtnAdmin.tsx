import React from 'react';
import 'boxicons/css/boxicons.css';

interface btnProps {
    icon: string;
    text: string;
    onButtonClick: (name: string, icon: string) => void;
    isSelected: boolean;
}

const GeneratorBtnAdmin: React.FC<btnProps> = ({ icon, text, onButtonClick, isSelected }) => {
    return (
        <button 
            className={`admin-option w-full h-14 flex justify-start items-center gap-1 transition-[.4s] max-md:bg-CWhite max-md:px-8  max-md:rounded-full max-md:h-10 ${isSelected ? 'bg-CGray  text-CBlack max-md:bg-[#c4c4c4] ' : 'text-CWhite max-md:text-CBlack hover:bg-[#252525]'}`} 
            id={`btn-${text}`} 
            onClick={() => onButtonClick(text, icon)}
        >
            <i className={`bx ${icon}`}></i>
            <p>{text}</p>
        </button>
    );
}

export default GeneratorBtnAdmin;
