import React from 'react';
import 'boxicons/css/boxicons.css';
import GeneratorBtnAdmin from "../utils/GeneratorBtnAdmin";

interface SideMenuAdminProps {
    onButtonClick: (name: string, icon: string) => void;
}

const SideMenuAdmin: React.FC<SideMenuAdminProps> = ({ onButtonClick }) => {
    return (
        <div className="bg-CBlack w-[20vw] h-full flex justify-start items-center flex-col">
            <GeneratorBtnAdmin icon='bxs-buildings' text='Hoteles' onButtonClick={onButtonClick} />
            <GeneratorBtnAdmin icon='bxs-building' text='Pisos' onButtonClick={onButtonClick} />
            <GeneratorBtnAdmin icon='bxs-hotel' text='Habitaciones' onButtonClick={onButtonClick} />
            <GeneratorBtnAdmin icon='bxs-bed' text='Tipos de habitacion' onButtonClick={onButtonClick} />
            <GeneratorBtnAdmin icon='bxs-user-badge' text='Huespedes' onButtonClick={onButtonClick} />
            <GeneratorBtnAdmin icon='bxs-user-detail' text='Clientes' onButtonClick={onButtonClick} />
            <GeneratorBtnAdmin icon='bxs-book' text='Reservas' onButtonClick={onButtonClick} />
        </div>
    );
}

export default SideMenuAdmin;
