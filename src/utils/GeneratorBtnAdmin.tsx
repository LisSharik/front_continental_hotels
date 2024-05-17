import React from 'react';
import 'boxicons/css/boxicons.css';

interface BtnProps {
    icon: string;
    text: string;
    onButtonClick: (name: string, icon: string) => void;
}

const BtnAdmin: React.FC<BtnProps> = ({ icon, text, onButtonClick }) => {
    return (
        <button className="admin-option" id={`btn-${text}`} onClick={() => onButtonClick(text, icon)}>
            <i className={`bx ${icon}`}></i>
            <p>{text}</p>
        </button>
    );
}

export default BtnAdmin;
