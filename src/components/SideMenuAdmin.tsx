import React, { useState } from 'react';
import 'boxicons/css/boxicons.css';
import GeneratorBtnAdmin from "../utils/GeneratorBtnAdmin";
import { API_URLS } from '../data/ApiUrls';
import { ICONS } from '../utils/Icons';

interface SideMenuAdminProps {
    onButtonClick: (name: string) => void;
}

const SideMenuAdmin: React.FC<SideMenuAdminProps> = ({ onButtonClick }) => {
    const [selectedButton, setSelectedButton] = useState<string | null>(null);

    const handleButtonClick = (name: string) => {
        setSelectedButton(name);
        onButtonClick(name);
    };

    const buttons = Object.keys(API_URLS).map((key) => {
        const name = key.charAt(0).toUpperCase() + key.slice(1).toLowerCase();
        const icon = ICONS[name] || 'bxs-folder'; // Utiliza un icono por defecto si no se encuentra el específico
        return (
            <GeneratorBtnAdmin
                key={key}
                icon={icon}
                text={name}
                isSelected={selectedButton === name}
                onButtonClick={() => handleButtonClick(name)}
            />
        );
    });

    return (
        <>
            <div className="hidden md:flex  w-[20vw] h-full flex-col items-center bg-CBlack max-md:bg-transparent ">
                {buttons}
            </div>
            <div className="md:hidden w-full flex overflow-x-auto  p-4 ">
                {buttons.map((button, index) => (
                    <div key={index} className="mx-2 ">
                        {button}
                    </div>
                ))}
            </div>
        </>
    );
}

export default SideMenuAdmin;
